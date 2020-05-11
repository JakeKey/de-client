import { ProductNutrientsType, MealProductsType } from "utils/api/types";

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
