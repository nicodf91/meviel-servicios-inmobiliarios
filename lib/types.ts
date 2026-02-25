export type OperationType = "Venta" | "Alquiler";
export type PropertyType =
  | "Departamento"
  | "Casa"
  | "Dúplex"
  | "Terreno"
  | "Local";
export type Currency = "USD" | "ARS";

export interface Property {
  id: string;
  slug: string;
  title: string;
  operation: OperationType;
  type: PropertyType;
  zone: string;
  address: string;
  price: number;
  currency: Currency;
  bedrooms: number;
  bathrooms: number;
  areaM2: number;
  garage: number;
  featured?: boolean;
  isNew?: boolean;
  description: string;
  longDescription: string;
  technicalDetails: Array<{ label: string; value: string }>;
  services: string[];
  features: string[];
  images: string[];
  mapQuery: string;
}

export interface Development {
  id: string;
  name: string;
  zone: string;
  stage: "En construcción" | "Próximo lanzamiento";
  units: string;
  summary: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
