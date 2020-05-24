/* eslint-disable no-magic-numbers */
import React, { useState, useEffect, FC } from "react";
import ReactSelect, { ValueType } from "react-select";
import { AxiosResponse } from "axios";
import * as yup from "yup";

import { PRODUCTS_ROUTE, PRODUCTS_CATEGORIES_ROUTE, MEALS_ROUTE } from "config";
import api from "utils/api";
import usePrefix from "utils/usePrefix";
import {
  ProductNutrientsType,
  ProductsCategoriesResponse,
  ProductsCategoriesType,
  ProductDetailsResponse,
  ProductDetailsType,
  MealProductsType,
  MealCategoriesType,
  NutrientsType,
  MealsResponse
} from "utils/api/types";
import { mealCategories } from "utils/constants";
import { getProductsNutrients } from "utils/misc";
import colors from "styles/colors";

import List from "components/List";
import TextInput from "components/TextInput";
import Button from "components/Button";
import FlexDiv from "components/FlexDiv";
import Footer from "components/Footer";
import GridItem from "components/GridItem";
import Header from "components/Header";

import { NewMealLayout, customSelectStyle, MealData } from "./styles";

const quantitySchema = yup
  .number()
  .min(0.1)
  .max(1000);

interface Props {
  anyMeals: boolean;
  closeNewMealView: () => void;
}

interface CategoryOption {
  value: ProductsCategoriesType;
  label: string;
}

interface ProductOption {
  value: ProductDetailsType;
  label: string;
}

interface MealCategoryOption {
  value: MealCategoriesType;
  label: string;
}

interface OptionsTypes {
  categories: CategoryOption[];
  products: ProductOption[];
  mealCategories: MealCategoryOption[];
}

const NewMeal: FC<Props> = ({ closeNewMealView, anyMeals }) => {
  const t = usePrefix("meals");

  const [options, setOptions] = useState<OptionsTypes>({
    categories: [],
    products: [],
    mealCategories: mealCategories.map(cat => ({ label: t(cat), value: cat }))
  });

  const [mealName, setMealName] = useState("");
  const [mealCategory, setMealCategory] = useState<
    ValueType<MealCategoryOption>
  >(undefined);
  const [productCategory, setProductCategory] = useState<
    ValueType<CategoryOption>
  >(undefined);
  const [product, setProduct] = useState<ValueType<ProductOption>>(undefined);
  // eslint-disable-next-line no-magic-numbers
  const [productQuantity, setProductQuantity] = useState(0);
  const [mealProducts, setMealProducts] = useState<MealProductsType[]>([]);
  const [currentNutrients, setCurrentNutrients] = useState<
    ProductNutrientsType
  >();

  const getProducts = async (category?: string) => {
    const result: AxiosResponse<ProductDetailsResponse> | void = await api(
      `${PRODUCTS_ROUTE}${!category ? "" : `?category=${category}`}`,
      {
        method: "GET"
      }
    );

    if (!!result && !!result.data && !!result.data.length) {
      const productOptions = result.data.map(product => ({
        value: product,
        label: product.name
      }));
      setOptions(prevState => ({
        ...prevState,
        products: productOptions
      }));
    }
  };

  const getProductsCategories = async () => {
    const result: AxiosResponse<ProductsCategoriesResponse> | void = await api(
      PRODUCTS_CATEGORIES_ROUTE,
      {
        method: "GET"
      }
    );

    if (!!result && !!result.data && !!result.data.length) {
      const categoriesOptions = result.data.map(category => ({
        value: category,
        label: t(category)
      }));
      setOptions(prevState => ({
        ...prevState,
        categories: categoriesOptions
      }));
    }
  };

  useEffect(() => {
    getProductsCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productCategory) {
      const category =
        !!productCategory && "value" in productCategory
          ? productCategory.value
          : undefined;
      getProducts(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productCategory]);

  const handleMealProductsAdd = (
    product: ValueType<ProductOption>,
    productQuantity: number
  ) => {
    if (!!product && "value" in product) {
      const index = mealProducts.findIndex(
        prod => prod.value._id === product.value._id
      );
      if (index === -1) {
        setMealProducts([
          ...mealProducts,
          {
            value: product.value,
            quantity: productQuantity
          }
        ]);
        return;
      }
      const tempMealProducts = [...mealProducts];
      tempMealProducts[index].quantity += productQuantity;
      setMealProducts([...tempMealProducts]);
    }
  };

  const handleMealProductsRemove = (id: string | number) =>
    setMealProducts(mealProducts.filter(prod => prod.value._id !== id));

  const handleMealAdd = async () => {
    const result: AxiosResponse<MealsResponse> | void = await api(MEALS_ROUTE, {
      method: "POST",
      data: {
        name: mealName,
        category: mealCategory && "value" in mealCategory && mealCategory.value,
        products: mealProducts.map(prod => ({
          productId: prod.value._id,
          quantity: prod.quantity
        }))
      }
    });
    if (result && result.data) console.log("result", result.data);
  };

  useEffect(() => {
    setCurrentNutrients(
      mealProducts.length ? getProductsNutrients(mealProducts) : undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealProducts]);

  return (
    <>
      <Header title={t("create_new_meal")} />
      <GridItem gridArea="main">
        <NewMealLayout>
          <MealData>
            <TextInput
              name="meal_name"
              placeholder={t("type_meal_name")}
              label={t("meal_name")}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMealName(e.target.value)
              }
              value={mealName}
              margin="0 0 5px"
            />

            <ReactSelect
              onChange={(value: ValueType<MealCategoryOption>) => {
                setMealCategory(value);
              }}
              options={options.mealCategories}
              value={mealCategory}
              isSearchable={false}
              placeholder={t("select_meal_category")}
              styles={customSelectStyle({ margin: "0 0 5px" })}
            />

            <ReactSelect
              onChange={(value: ValueType<CategoryOption>) => {
                setProductCategory(value);
                setProduct(null);
              }}
              options={options.categories}
              value={productCategory}
              isSearchable={false}
              placeholder={t("select_prod_category")}
              styles={customSelectStyle({ margin: "0 0 5px" })}
            />
            <ReactSelect
              onChange={(value: ValueType<ProductOption>) => setProduct(value)}
              options={options.products}
              value={product}
              isSearchable={false}
              placeholder={t("select_product")}
              styles={customSelectStyle()}
            />
            {product && "value" in product && (
              <>
                <List
                  title={t("nutrients_per_100g")}
                  elements={(Object.keys(
                    product.value.nutrients
                  ) as NutrientsType[]).map(nutr => ({
                    label: `${t(nutr)}: ${product.value.nutrients[nutr]}g`,
                    id: t(nutr)
                  }))}
                />
                <FlexDiv alignItems="center">
                  <TextInput
                    name="quantity"
                    step={0.1}
                    label={t("quantity_g")}
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (!e.target.value) return;
                      setProductQuantity(parseFloat(e.target.value));
                    }}
                    value={productQuantity}
                    max={1000}
                    min={0.1}
                    size={6}
                    margin="5px 0"
                  />
                  <Button
                    color="transparent"
                    margin="0 10px"
                    onClick={() =>
                      quantitySchema
                        .isValid(productQuantity)
                        .then(
                          (valid: boolean) =>
                            valid &&
                            handleMealProductsAdd(product, productQuantity)
                        )
                    }
                  >
                    {t("add_product")}
                  </Button>
                </FlexDiv>
              </>
            )}
          </MealData>

          <GridItem>
            {currentNutrients ? (
              <List
                title={t("current_nutrients")}
                elements={(Object.keys(
                  currentNutrients
                ) as NutrientsType[]).map(nutr => ({
                  label: `${t(nutr)}: ${currentNutrients[nutr].toFixed(2)}g`,
                  id: t(nutr)
                }))}
              />
            ) : (
              t("add_products")
            )}
          </GridItem>
          <GridItem>
            {mealProducts.length ? (
              <List
                title={t("current_products")}
                elements={mealProducts.map(prod => ({
                  label: `${prod.value.name} ${prod.quantity.toFixed(1)}g`,
                  id: prod.value._id
                }))}
                icon="minus"
                iconColor={colors.red}
                onClick={handleMealProductsRemove}
              />
            ) : (
              t("add_products")
            )}
          </GridItem>
        </NewMealLayout>
      </GridItem>
      <Footer>
        {anyMeals && (
          <Button
            color="transparent"
            onClick={closeNewMealView}
            margin="16px 20px"
          >
            {t("go_back")}
          </Button>
        )}
        <Button
          onClick={handleMealAdd}
          disabled={!mealProducts.length || !mealName || !mealCategory}
          margin="16px 20px"
        >
          {t("add_meal")}
        </Button>
      </Footer>
    </>
  );
};

export default NewMeal;
