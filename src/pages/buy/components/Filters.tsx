import { List, Map, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

interface FiltersProps {
  propertyType: string;
  setPropertyType: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  beds: string;
  setBeds: (value: string) => void;
  baths: string;
  setBaths: (value: string) => void;
  viewMode: "list" | "map";
  setViewMode: (value: "list" | "map") => void;
  onOpenSidebar: () => void;
}

export function Filters({
  propertyType,
  setPropertyType,
  priceRange,
  setPriceRange,
  beds,
  setBeds,
  baths,
  setBaths,
  viewMode,
  setViewMode,
  onOpenSidebar,
}: FiltersProps) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 items-end">
        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#f1f3ee]">
            Property Type
          </label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="bg-transparent border-white/30 text-[#f1f3ee]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="bg-[#121613] border-white/20 text-[#f1f3ee]">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="single">Single Family</SelectItem>
              <SelectItem value="multi">Multi Family</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="luxury">Luxury Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2 lg:col-span-2">
          <label className="text-sm font-medium text-[#f1f3ee]">
            Price Range
          </label>
          <div className="rounded-lg px-4 py-3 bg-white/10 border border-white/20">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2_000_000}
              step={10_000}
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#f1f3ee]">Bedrooms</label>
          <Select value={beds} onValueChange={setBeds}>
            <SelectTrigger className="bg-transparent border-white/30 text-[#f1f3ee]">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent className="bg-[#121613] border-white/20 text-[#f1f3ee]">
              <SelectItem value="any">Any Beds</SelectItem>
              <SelectItem value="1">1+ Beds</SelectItem>
              <SelectItem value="2">2+ Beds</SelectItem>
              <SelectItem value="3">3+ Beds</SelectItem>
              <SelectItem value="4">4+ Beds</SelectItem>
              <SelectItem value="5">5+ Beds</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#f1f3ee]">Bathrooms</label>
          <Select value={baths} onValueChange={setBaths}>
            <SelectTrigger className="bg-transparent border-white/30 text-[#f1f3ee]">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent className="bg-[#121613] border-white/20 text-[#f1f3ee]">
              <SelectItem value="any">Any Baths</SelectItem>
              <SelectItem value="1">1+ Baths</SelectItem>
              <SelectItem value="2">2+ Baths</SelectItem>
              <SelectItem value="3">3+ Baths</SelectItem>
              <SelectItem value="4">4+ Baths</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters Button */}
        <Button
          onClick={onOpenSidebar}
          className="flex items-center justify-center gap-2 border-white/30 bg-white/10 text-[#f1f3ee] hover:bg-white/20"
        >
          <Filter className="h-4 w-4" />
          Advanced
        </Button>

        {/* View Mode */}
        <div className="flex gap-2">
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={
              viewMode === "list"
                ? "bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720]"
                : "text-[#f1f3ee] hover:bg-white/10"
            }
          >
            <List className="h-4 w-4 mr-2" />
            List
          </Button>
          <Button
            variant={viewMode === "map" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("map")}
            className={
              viewMode === "map"
                ? "bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720]"
                : "text-[#f1f3ee] hover:bg-white/10"
            }
          >
            <Map className="h-4 w-4 mr-2" />
            Map
          </Button>
        </div>
      </div>
    </div>
  );
}
