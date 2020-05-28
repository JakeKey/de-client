import {
  ProductNutrientsType,
  MealProductsType,
  MealType
} from "utils/api/types";

const NUTRIENT_DIVISOR = 100;

export const getProductsNutrients = (
  products: MealProductsType[]
): ProductNutrientsType => ({
  proteins: products
    .map(
      prod => (prod.value.nutrients.proteins * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  carbohydrates: products
    .map(
      prod =>
        (prod.value.nutrients.carbohydrates * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  fat: products
    .map(prod => (prod.value.nutrients.fat * prod.quantity) / NUTRIENT_DIVISOR)
    .reduce((pVal, cVal) => pVal + cVal),
  saturatedFat: products
    .map(
      prod =>
        (prod.value.nutrients.saturatedFat * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  omega3: products
    .map(
      prod => (prod.value.nutrients.omega3 * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  omega6: products
    .map(
      prod => (prod.value.nutrients.omega6 * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  salt: products
    .map(prod => (prod.value.nutrients.salt * prod.quantity) / NUTRIENT_DIVISOR)
    .reduce((pVal, cVal) => pVal + cVal),
  sugar: products
    .map(
      prod => (prod.value.nutrients.sugar * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal),
  energy: products
    .map(
      prod => (prod.value.nutrients.energy * prod.quantity) / NUTRIENT_DIVISOR
    )
    .reduce((pVal, cVal) => pVal + cVal)
});

export const getMealsNutrients = (meals: MealType[]): ProductNutrientsType => ({
  proteins: meals
    .map(meal => meal.nutrients.proteins)
    .reduce((pVal, cVal) => pVal + cVal),
  carbohydrates: meals
    .map(meal => meal.nutrients.carbohydrates)
    .reduce((pVal, cVal) => pVal + cVal),
  fat: meals
    .map(meal => meal.nutrients.fat)
    .reduce((pVal, cVal) => pVal + cVal),
  saturatedFat: meals
    .map(meal => meal.nutrients.saturatedFat)
    .reduce((pVal, cVal) => pVal + cVal),
  omega3: meals
    .map(meal => meal.nutrients.omega3)
    .reduce((pVal, cVal) => pVal + cVal),
  omega6: meals
    .map(meal => meal.nutrients.omega6)
    .reduce((pVal, cVal) => pVal + cVal),
  salt: meals
    .map(meal => meal.nutrients.salt)
    .reduce((pVal, cVal) => pVal + cVal),
  sugar: meals
    .map(meal => meal.nutrients.sugar)
    .reduce((pVal, cVal) => pVal + cVal),
  energy: meals
    .map(meal => meal.nutrients.energy)
    .reduce((pVal, cVal) => pVal + cVal)
});

export const addPixels = (values: string[]): string =>
  values
    .map(val => parseInt(val.replace(/px/, ""), 10))
    .reduce((pVal, cVal) => pVal + cVal) + "px";
