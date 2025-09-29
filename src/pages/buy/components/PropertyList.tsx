import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { PropertyCard } from "./PropertyCard";

type PropertyListProps = {
  properties: any[];
  viewMode: "list" | "map";
};

export function PropertyList({ properties, viewMode }: PropertyListProps) {
  // ---- Pagination config
  const perPage = viewMode === "map" ? 3 : 9;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(properties.length / perPage));
  const startIdx = (page - 1) * perPage;
  const endIdx = Math.min(startIdx + perPage, properties.length);
  const pageItems = properties.slice(startIdx, endIdx);

  useEffect(() => {
    // Réinitialiser la page si le mode change ou si la data change
    setPage(1);
  }, [viewMode, properties.length]);

  // Construction d’une pagination compacte (1 … p-1 p p+1 … N)
  const pageButtons = useMemo(() => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const out: (number | "…")[] = [1];
    if (page > 3) out.push("…");
    const start = Math.max(2, page - 1);
    const stop = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= stop; i++) out.push(i);
    if (page < totalPages - 2) out.push("…");
    out.push(totalPages);
    return out;
  }, [page, totalPages]);

  const gridCols =
    viewMode === "map"
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div
      className={`${
        viewMode === "map" ? "w-1/2" : "w-full"
      } transition-all duration-500`}
    >
      {/* Header de la liste */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#f1f3ee] mb-1">
            Available Properties
          </h2>
          <p className="text-gray-300">
            {properties.length === 0
              ? "No results"
              : `Showing ${startIdx + 1}–${endIdx} of ${properties.length}`}
          </p>
        </div>

        <Select defaultValue="newest">
          <SelectTrigger className="w-56 bg-transparent border-white/30 text-[#f1f3ee]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#121613] border-white/20 text-[#f1f3ee]">
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="cap-rate">Highest Cap Rate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Liste des propriétés (paginée) */}
      <div className={`grid ${gridCols} gap-6`}>
        {pageItems.map((p, i) => (
          <motion.div
            key={p.id ?? `${startIdx + i}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="group"
          >
            <PropertyCard property={p} index={startIdx + i} />
          </motion.div>
        ))}

        {/* État vide */}
        {properties.length === 0 && (
          <div className="col-span-full text-center text-gray-300">
            No properties found matching your criteria.
          </div>
        )}
      </div>

      {/* Pagination */}
      {properties.length > perPage && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {/* Prev */}
          <Button
            variant="ghost"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="border border-white/20 bg-white/10 text-[#f1f3ee] hover:bg-white/15 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>

          {/* Numbers */}
          {pageButtons.map((p, idx) =>
            p === "…" ? (
              <div
                key={`dots-${idx}`}
                className="px-3 py-2 rounded-lg border border-transparent text-gray-400"
              >
                <MoreHorizontal className="h-4 w-4" />
              </div>
            ) : (
              <Button
                key={p}
                variant={p === page ? "default" : "ghost"}
                onClick={() => setPage(Number(p))}
                className={
                  p === page
                    ? // actif : dégradé or luxueux
                      "px-3 py-2 rounded-lg bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl"
                    : // inactif : verre fumé
                      "px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-[#f1f3ee] hover:bg-white/15"
                }
              >
                {p}
              </Button>
            )
          )}

          {/* Next */}
          <Button
            variant="ghost"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="border border-white/20 bg-white/10 text-[#f1f3ee] hover:bg-white/15 disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}
