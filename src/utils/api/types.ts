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

export type MealCategoriesType =
  | "I breakfast"
  | "II breakfast"
  | "lunch"
  | "snack"
  | "I dinner"
  | "II dinner";

export type ProductsCategoriesResponse = ProductsCategoriesType[];

export type NutrientsType =
  | "proteins"
  | "carbohydrates"
  | "fat"
  | "saturatedFat"
  | "omega3"
  | "omega6"
  | "salt"
  | "sugar"
  | "energy";

export interface ProductNutrientsType {
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

export interface ProductDetailsType {
  _id: string;
  name: string;
  category: ProductsCategoriesType;
  nutrients: ProductNutrientsType;
}

export type ProductDetailsResponse = ProductDetailsType[];

export interface MealProductsType {
  value: ProductDetailsType;
  quantity: number;
}

export interface ProductWithQuantityType {
  _id: string;
  product: { _id: string; name: string };
  quantity: number;
}

export interface MealType {
  _id: string;
  name: string;
  category: MealCategoriesType;
  createdAt: Date;
  ownerId: string;
  nutrients: ProductNutrientsType;
  products: ProductWithQuantityType[];
}

export type MealsResponse = MealType[];
