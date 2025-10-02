export interface House {
  id: number;
  title?: string;
  image: string[];
  address?: string;
  price?: string;
  yearBuilt?: string;
  heating?: string;
  bedrooms?: string;
  bathrooms?: string;
  parking?: string;
  sqft?: string;
}

export interface SellProps {
  house: House;
  setEtape: React.Dispatch<React.SetStateAction<number>>;
}