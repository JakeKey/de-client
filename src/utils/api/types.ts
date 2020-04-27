export type ProductsCategoriesType =
  | "dairy"
  | "meat"
  | "preserved food"
  | "fish & seafood"
  | "fats & oils"
  | "dried fruit"
  | "cereal products"
  | "fruits"
  | "vegetables";

export type ProductsCategoriesResponse = ProductsCategoriesType[];

export interface ProductDetailsType {
  _id: string;
  name: string;
  category: ProductsCategoriesType;
  proteins: number;
  carbohydrates: number;
  fat: number;
  saturatedFat: number;
  omega3: number;
  omega6: number;
  salt: number;
  sugar: number;
  energy: number;
}

export type ProductDetailsResponse = ProductDetailsType[];
