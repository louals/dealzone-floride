import React from "react";
import CreatableSelect from "react-select/creatable";
import type { ActiveFilters } from "./FilterSidebar";

export interface Option {
  value: string;
  label: string;
}

interface FilterCreatableMultiSelectProps {
  label: string;
  name: keyof ActiveFilters; // ✅ Typage correct
  options: Option[];
  selectedOptions?: string[];
  onChange: (name: keyof ActiveFilters, values: string[]) => void; // ✅ Typage correct
  placeholder?: string;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#1f2420",
    borderColor: "#444",
    color: "white",
    padding: "2px",
    borderRadius: "8px",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#1f2420",
    color: "white",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#b58f46",
    color: "white",
    borderRadius: "4px",
    padding: "2px",
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#aaa",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
};

const FilterCreatableMultiSelect: React.FC<FilterCreatableMultiSelectProps> = ({
  label,
  name,
  options,
  selectedOptions,
  onChange,
  placeholder,
}) => {
  const handleChange = (newValue: any) => {
    const values = newValue ? newValue.map((opt: Option) => opt.value) : [];
    onChange(name, values);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <CreatableSelect
        isMulti
        options={options}
        value={options.filter((opt) => selectedOptions?.includes(opt.value))}
        onChange={handleChange}
        styles={customStyles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterCreatableMultiSelect;
