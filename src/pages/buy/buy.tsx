import { useState } from "react";
import { motion } from "framer-motion";

import { SearchBar } from "./components/SearchBar";
import { Filters } from "./components/Filters";
import { PropertyList } from "./components/PropertyList";
import { MapView } from "./components/MapView";
import { properties } from "./components/properties";
import FilterSidebar, { type ActiveFilters } from "./components/FilterSidebar";

export default function BuyPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [priceRange, setPriceRange] = useState<number[]>([0, 2_000_000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [beds, setBeds] = useState("any");
  const [baths, setBaths] = useState("any");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- State pour les filtres avancés ---
  const [filters, setFilters] = useState<ActiveFilters>({});

  const handleFilterChange = (name: keyof ActiveFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    console.log("Filters applied:", filters);
    setIsSidebarOpen(false);
  };

  const handleResetFilters = () => {
    setFilters({});
    console.log("Filters reset");
    setIsSidebarOpen(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] px-4 pb-20 mt-15">
      <div className="max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f1f3ee]">
            Explore Properties and View Locations
          </h1>
        </motion.div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Filters
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          beds={beds}
          setBeds={setBeds}
          baths={baths}
          setBaths={setBaths}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        <div className="mt-12 flex gap-8">
          <PropertyList properties={properties} viewMode={viewMode} />
          {viewMode === "map" && <MapView />}
        </div>
      </div>

      {/* Sidebar */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
    </section>
  );
}
