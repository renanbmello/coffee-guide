export interface CoffeeMethod {
  name: string;
  description: string;
  category: CoffeeCategory;
  steps: string[];
  tips: string[];
  imageUrl: string;
}

export type CoffeeCategory = "espresso" | "pour over";
// | "cold brew" | "french press" | "aeropress" | "v60";

export interface CategoryInfo {
    id: CoffeeCategory;
    name: string;
    description: string;
    imageUrl: string;
}

export interface SubCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Tool {
  id: string
  name: string
  description: string
  imageUrl: string
}

export interface Recipe {
  id: string
  name: string
  description: string
  imageUrl: string
  ratio: number
  defaultDose: number
  tools: Tool[]
  steps: {
    id: number
    instruction: string
    imageUrl?: string
    tip?: string
  }[]
}