import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FilterCreatableMultiSelect from "./FilterCreatableMultiSelect"; // keep same path

// Export as a type so you can: import type { ActiveFilters } from "./FilterSidebar"
export type ActiveFilters = {
  location?: string;
  minLotSize?: number;
  maxLotSize?: number;
  basement?: "yes" | "no" | "any";
  minYearBuilt?: number;
  maxYearBuilt?: number;
  propertyType?: string;
  minBedrooms?: number;
  minBathrooms?: number;
  heatingType?: string;
  amenities?: string[];
  features?: string[];
  minPrice?: number;
  maxPrice?: number;
  listingType?: string;
  zoning?: string;
  nearbyFacilities?: string[];
  furnished?: "yes" | "no" | "any";
  propertyCondition?: string;
  vacancy?: "yes" | "no" | "any";
  minCapRate?: number;
  maxCapRate?: number;
  status?: "verified" | "unverified" | "all";
  newlyAdded?: boolean;
};

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: ActiveFilters;
  onFilterChange: (name: keyof ActiveFilters, value: any) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

// ===== Generic Inputs (bright glass look) =====
const baseField =
  "w-full px-3 py-2 rounded-lg border border-white/20 bg-white/15 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[#eac873] focus:border-transparent text-[#f6f7f4] placeholder-white/60";

const FilterInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, id, className = "", ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-white/90">
      {label}
    </label>
    <input id={id} {...props} className={`${baseField} ${className}`} />
  </div>
);

const FilterSelect: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }
> = ({ label, id, children, className = "", ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-white/90">
      {label}
    </label>
    <select id={id} {...props} className={`${baseField} ${className}`}>
      {children}
    </select>
  </div>
);

const FilterRadioGroup: React.FC<{
  label: string;
  name: keyof ActiveFilters;
  options: { value: string; label: string }[];
  selectedValue: string | undefined;
  onChange: (name: keyof ActiveFilters, value: string) => void;
}> = ({ label, name, options, selectedValue, onChange }) => (
  <div className="space-y-1.5">
    <span className="block text-sm font-medium text-white/90">{label}</span>
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {options.map((opt) => (
        <label key={opt.value} className="inline-flex items-center gap-2">
          <input
            type="radio"
            name={String(name)}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={(e) => onChange(name, e.target.value)}
            className="h-4 w-4 rounded-full border-white/30 bg-white/20 text-[#e6c77c] focus:ring-[#eac873]"
          />
          <span className="text-sm text-[#f6f7f4]">{opt.label}</span>
        </label>
      ))}
    </div>
  </div>
);

// ===== Accordion =====
const AccordionItem: React.FC<{
  title: string;
  children: React.ReactNode;
  filtersActive?: boolean;
}> = ({ title, children, filtersActive = false }) => {
  const [open, setOpen] = React.useState(filtersActive);
  React.useEffect(() => {
    if (filtersActive) setOpen(true);
  }, [filtersActive]);

  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-left text-white/95 hover:bg-white/[0.08] transition"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium tracking-wide">{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-4 pb-5 pt-2 grid gap-4 bg-white/[0.06]"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ===== Sidebar (brighter luxe) =====
const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onApplyFilters,
  onResetFilters,
}) => {
  // close on ESC
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let v: any = value;
    if (type === "number") v = value === "" ? undefined : parseFloat(value);
    onFilterChange(name as keyof ActiveFilters, v);
  };

  const handleMultiSelectChange = (name: keyof ActiveFilters, values: string[]) => {
    onFilterChange(name, values.length ? values : undefined);
  };

  // options
  const yesNoAny = [
    { value: "any", label: "Any" },
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const propertyTypes = [
    { value: "", label: "Any" },
    { value: "single-family-home", label: "Single Family" },
    { value: "multi-family-home", label: "Multi‑Family" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
    { value: "land", label: "Land" },
    { value: "commercial", label: "Commercial" },
  ];
  const heating = [
    { value: "", label: "Any" },
    { value: "radiator", label: "Radiator" },
    { value: "forced-air", label: "Forced Air" },
    { value: "electric", label: "Electric Baseboard" },
    { value: "gas", label: "Gas Furnace" },
    { value: "heat_pump", label: "Heat Pump" },
  ];
  const conditions = [
    { value: "", label: "Any" },
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "renovated", label: "Recently Renovated" },
    { value: "needs_renovation", label: "Needs Renovation" },
    { value: "new_construction", label: "New Construction" },
  ];
  const amenityOptions = [
    { value: "pool", label: "Pool" },
    { value: "parking", label: "Parking" },
    { value: "gym", label: "Gym" },
    { value: "garden", label: "Garden" },
    { value: "ac", label: "Air Conditioning" },
  ];
  const featureOptions = [
    { value: "hardwood_floors", label: "Hardwood Floors" },
    { value: "updated_kitchen", label: "Updated Kitchen" },
    { value: "walk_in_closet", label: "Walk‑in Closet" },
  ];
  const nearbyOptions = [
    { value: "school", label: "School" },
    { value: "park", label: "Park" },
    { value: "hospital", label: "Hospital" },
    { value: "shopping", label: "Shopping" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay (lighter) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 left-0 h-screen w-full max-w-md z-[101] flex flex-col
                       bg-gradient-to-b from-[#253229]/85 via-[#212c25]/75 to-[#1c2420]/80
                       supports-[backdrop-filter]:backdrop-blur-xl border-r border-white/15 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4
                            bg-white/10 backdrop-blur border-b border-white/15">
              <div className="space-y-0.5">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Advanced Filters
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-white/90"
                aria-label="Close filters"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 grid gap-6">
              {/* Location */}
              <section className="grid gap-3">
                <FilterInput
                  label="Location"
                  id="location"
                  name="location"
                  placeholder="City, ZIP, Address…"
                  value={filters.location || ""}
                  onChange={handleInputChange}
                />
              </section>

              {/* Beds & Baths */}
              <section className="grid gap-3">
                <h3 className="text-sm font-semibold tracking-wide text-white/90">Bedrooms & Bathrooms</h3>
                <div className="grid grid-cols-2 gap-3">
                  <FilterInput
                    label="Min Beds"
                    id="minBedrooms"
                    name="minBedrooms"
                    type="number"
                    min={0}
                    placeholder="e.g. 2"
                    value={filters.minBedrooms ?? ""}
                    onChange={handleInputChange}
                  />
                  <FilterInput
                    label="Min Baths"
                    id="minBathrooms"
                    name="minBathrooms"
                    type="number"
                    min={0}
                    placeholder="e.g. 1"
                    value={filters.minBathrooms ?? ""}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              {/* Accordions */}
              <AccordionItem title="Price Range" filtersActive={!!(filters.minPrice || filters.maxPrice)}>
                <div className="grid grid-cols-2 gap-3">
                  <FilterInput
                    label="Min Price ($)"
                    id="minPrice"
                    name="minPrice"
                    type="number"
                    min={0}
                    placeholder="Any"
                    value={filters.minPrice ?? ""}
                    onChange={handleInputChange}
                  />
                  <FilterInput
                    label="Max Price ($)"
                    id="maxPrice"
                    name="maxPrice"
                    type="number"
                    min={0}
                    placeholder="Any"
                    value={filters.maxPrice ?? ""}
                    onChange={handleInputChange}
                  />
                </div>
              </AccordionItem>

              <AccordionItem
                title="Property Details"
                filtersActive={
                  !!(filters.propertyType || filters.minLotSize || filters.maxLotSize || (filters.basement && filters.basement !== "any"))
                }
              >
                <FilterSelect
                  label="Property Type"
                  id="propertyType"
                  name="propertyType"
                  value={filters.propertyType || ""}
                  onChange={handleInputChange}
                >
                  {propertyTypes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </FilterSelect>
                <div className="grid grid-cols-2 gap-3">
                  <FilterInput
                    label="Min Lot (sqft)"
                    id="minLotSize"
                    name="minLotSize"
                    type="number"
                    min={0}
                    placeholder="Any"
                    value={filters.minLotSize ?? ""}
                    onChange={handleInputChange}
                  />
                  <FilterInput
                    label="Max Lot (sqft)"
                    id="maxLotSize"
                    name="maxLotSize"
                    type="number"
                    min={0}
                    placeholder="Any"
                    value={filters.maxLotSize ?? ""}
                    onChange={handleInputChange}
                  />
                </div>
                <FilterRadioGroup
                  label="Basement"
                  name="basement"
                  options={yesNoAny}
                  selectedValue={filters.basement || "any"}
                  onChange={onFilterChange}
                />
              </AccordionItem>

              <AccordionItem title="Year Built" filtersActive={!!(filters.minYearBuilt || filters.maxYearBuilt)}>
                <div className="grid grid-cols-2 gap-3">
                  <FilterInput
                    label="Min Year"
                    id="minYearBuilt"
                    name="minYearBuilt"
                    type="number"
                    min={1800}
                    max={new Date().getFullYear()}
                    placeholder="e.g. 1980"
                    value={filters.minYearBuilt ?? ""}
                    onChange={handleInputChange}
                  />
                  <FilterInput
                    label="Max Year"
                    id="maxYearBuilt"
                    name="maxYearBuilt"
                    type="number"
                    min={1800}
                    max={new Date().getFullYear()}
                    placeholder="e.g. 2025"
                    value={filters.maxYearBuilt ?? ""}
                    onChange={handleInputChange}
                  />
                </div>
              </AccordionItem>

              <AccordionItem
                title="Amenities & Features"
                filtersActive={!!(filters.amenities?.length || filters.features?.length)}
              >
                <FilterCreatableMultiSelect
                  label="Amenities"
                  name="amenities"
                  options={amenityOptions}
                  selectedOptions={filters.amenities}
                  onChange={handleMultiSelectChange}
                  placeholder="Type or select amenities…"
                />
                <FilterCreatableMultiSelect
                  label="Features"
                  name="features"
                  options={featureOptions}
                  selectedOptions={filters.features}
                  onChange={handleMultiSelectChange}
                  placeholder="Type or select features…"
                />
              </AccordionItem>

              <AccordionItem
                title="Heating & Condition"
                filtersActive={!!(filters.heatingType || filters.propertyCondition)}
              >
                <div className="grid grid-cols-2 gap-3">
                  <FilterSelect
                    label="Heating"
                    id="heatingType"
                    name="heatingType"
                    value={filters.heatingType || ""}
                    onChange={handleInputChange}
                  >
                    {heating.map((h) => (
                      <option key={h.value} value={h.value}>
                        {h.label}
                      </option>
                    ))}
                  </FilterSelect>
                  <FilterSelect
                    label="Condition"
                    id="propertyCondition"
                    name="propertyCondition"
                    value={filters.propertyCondition || ""}
                    onChange={handleInputChange}
                  >
                    {conditions.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </FilterSelect>
                </div>
              </AccordionItem>

              <AccordionItem
                title="Other Details"
                filtersActive={!!((filters.furnished && filters.furnished !== "any") || (filters.vacancy && filters.vacancy !== "any"))}
              >
                <div className="grid grid-cols-2 gap-3">
                  <FilterRadioGroup
                    label="Furnished"
                    name="furnished"
                    options={yesNoAny}
                    selectedValue={filters.furnished || "any"}
                    onChange={onFilterChange}
                  />
                  <FilterRadioGroup
                    label="Vacancy"
                    name="vacancy"
                    options={yesNoAny}
                    selectedValue={filters.vacancy || "any"}
                    onChange={onFilterChange}
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Nearby Facilities" filtersActive={!!(filters.nearbyFacilities?.length)}>
                <FilterCreatableMultiSelect
                  label="Facilities"
                  name="nearbyFacilities"
                  options={nearbyOptions}
                  selectedOptions={filters.nearbyFacilities}
                  onChange={handleMultiSelectChange}
                  placeholder="Type or select facilities…"
                />
              </AccordionItem>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 px-5 py-4 bg-white/10 backdrop-blur border-t border-white/15 flex items-center gap-3">
              <button
                onClick={onResetFilters}
                className="flex-1 h-11 rounded-xl border border-white/25 bg-white/20 hover:bg-white/30 text-white transition shadow-sm"
              >
                Reset
              </button>
              <button
                onClick={onApplyFilters}
                className="flex-1 h-11 rounded-xl bg-gradient-to-r from-[#f5df96] via-[#eac873] to-[#ffd98e]
                           text-[#1f241f] font-semibold shadow-[0_6px_24px_rgba(250,222,120,0.35)] hover:shadow-[0_8px_28px_rgba(250,222,120,0.48)] transition"
              >
                Apply
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterSidebar;
