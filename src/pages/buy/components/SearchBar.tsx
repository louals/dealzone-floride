import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative max-w-4xl mx-auto mb-10">
      <div className="relative rounded-2xl p-2 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6c77c]/15 via-transparent to-[#ffdd95]/15 blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2 relative z-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e6c77c]" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search address, ZIP, city…"
              className="pl-12 bg-transparent border-white/30 text-[#f1f3ee] placeholder-gray-300"
            />
          </div>
          <Button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
