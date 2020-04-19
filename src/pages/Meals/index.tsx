import React, { useState, useEffect, FC } from "react";
import ReactSelect, { ValueType } from "react-select";
import { AxiosResponse } from "axios";

import api from "utils/api";
import usePrefix from "utils/usePrefix";
import {
  ProductsCategoriesResponse,
  ProductsCategoriesType
} from "utils/api/types";
import { PRODUCTS_ROUTE, PRODUCTS_CATEGORIES_ROUTE } from "config";

import { customSelectStyle } from "./styles";

interface CategoryOption {
  value: ProductsCategoriesType;
  label: string;
}

interface OptionsTypes {
  categories: CategoryOption[];
}

const Meals: FC = () => {
  const t = usePrefix("meals");

  const [options, setOptions] = useState<OptionsTypes>({ categories: [] });

  const [productCategory, setProductCategory] = useState<
    ValueType<CategoryOption>
  >(undefined);

  const getProducts = async () => {
    const result: AxiosResponse | void = await api(PRODUCTS_ROUTE, {
      method: "GET"
    });

    if (!!result && !!result.data) console.log(result.data);
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

  return (
    <div>
      <ReactSelect
        onChange={(value: ValueType<CategoryOption>) =>
          setProductCategory(value)
        }
        options={options.categories}
        value={productCategory}
        isSearchable={false}
        placeholder={t("select_prod_category")}
        styles={customSelectStyle}
      />
    </div>
  );
};
export default Meals;
