export interface CoffeeMethod {
  name: string;
  description: string;
  category: CoffeeCategory;
  steps: string[];
  tips: string[];
  imageUrl: string;
}

export type CoffeeCategory = "espresso" | "pour over" | "cold brew" | "french press" | "aeropress" | "v60";

export interface CategoryInfo {
    id: CoffeeCategory;
    name: string;
    description: string;
    imageUrl: string;
}