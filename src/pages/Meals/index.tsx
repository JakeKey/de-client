import React, { useState, useEffect, FC } from "react";
import ReactSelect, { ValueType } from "react-select";
import { AxiosResponse } from "axios";

import api from "utils/api";
import usePrefix from "utils/usePrefix";
import {
  ProductsCategoriesResponse,
  ProductsCategoriesType,
  ProductDetailsResponse,
  ProductDetailsType
} from "utils/api/types";
import { PRODUCTS_ROUTE, PRODUCTS_CATEGORIES_ROUTE } from "config";

import ElementsList from "components/ElementsList";
import TextInput from "components/TextInput";
import Button from "components/Button";

import { customSelectStyle } from "./styles";

interface CategoryOption {
  value: ProductsCategoriesType;
  label: string;
}

interface ProductOption {
  value: ProductDetailsType;
  label: string;
}

interface OptionsTypes {
  categories: CategoryOption[];
  products: ProductOption[];
}

const Meals: FC = () => {
  const t = usePrefix("meals");

  const [options, setOptions] = useState<OptionsTypes>({
    categories: [],
    products: []
  });

  const [productCategory, setProductCategory] = useState<
    ValueType<CategoryOption>
  >(undefined);

  const [product, setProduct] = useState<ValueType<ProductOption>>(undefined);
  // eslint-disable-next-line no-magic-numbers
  const [productQuantity, setProductQuantity] = useState(0);

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

  return (
    <div>
      <ReactSelect
        onChange={(value: ValueType<CategoryOption>) => {
          setProductCategory(value);
          setProduct(null);
        }}
        options={options.categories}
        value={productCategory}
        isSearchable={false}
        placeholder={t("select_prod_category")}
        styles={customSelectStyle}
      />
      <ReactSelect
        onChange={(value: ValueType<ProductOption>) => setProduct(value)}
        options={options.products}
        value={product}
        isSearchable={false}
        placeholder={t("select_product")}
        styles={customSelectStyle}
      />
      {product && "value" in product && (
        <>
          <ElementsList
            title={t("nutrients_per_100g")}
            elements={[
              {
                label: `${t("proteins")}: ${product.value.proteins}g`,
                id: t("proteins")
              },
              {
                label: `${t("carbohydrates")}: ${product.value.carbohydrates}g`,
                id: t("carbohydrates")
              },
              {
                label: `${t("fat")}: ${product.value.fat}g`,
                id: t("fat")
              },
              {
                label: `${t("saturated_fat")}: ${product.value.saturatedFat}g`,
                id: t("saturated_fat")
              },
              {
                label: `${t("omega3")}: ${product.value.omega3}g`,
                id: t("omega3")
              },
              {
                label: `${t("omega6")}: ${product.value.omega6}g`,
                id: t("omega6")
              },
              {
                label: `${t("salt")}: ${product.value.salt}g`,
                id: t("salt")
              },
              {
                label: `${t("sugar")}: ${product.value.sugar}g`,
                id: t("sugar")
              },
              {
                label: `${t("energy")}: ${product.value.energy}g`,
                id: t("energy")
              }
            ]}
          />
          <TextInput
            label={t("quantity_g")}
            step={0.1}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!e.target.value) return;
              setProductQuantity(parseFloat(e.target.value));
            }}
            value={productQuantity}
            max={1000}
            min={0}
            size={6}
          />
          <Button color="transparent">{t("add_product")}</Button>
        </>
      )}
    </div>
  );
};

export default Meals;
