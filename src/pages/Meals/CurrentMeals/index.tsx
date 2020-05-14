import React, { FC, useEffect, useState } from "react";

import usePrefix from "utils/usePrefix";
import { MealCategoriesType, MealsResponse } from "utils/api/types";

import List from "components/List";
import Loader from "components/Loader";
import GridItem from "components/GridItem";
import Button from "components/Button";

import { Main } from "./styles";

interface Props {
  meals: MealsResponse;
  openNewMealView: () => void;
}

const CurrentMeals: FC<Props> = ({ meals, openNewMealView }) => {
  const t = usePrefix("meals");
  const [categories, setCategories] = useState<MealCategoriesType[]>([]);

  useEffect(() => {
    setCategories([...new Set(meals.map(meal => meal.category))]);
  }, [meals]);

  return (
    <>
      <Main gridArea="main">
        {categories.map(category => (
          <List
            key={category}
            title={t("category_meals", { category: t(category) })}
            elements={meals
              .filter(meal => meal.category === category)
              .map(meal => ({ label: meal.name, id: meal._id }))}
          />
        ))}
        {!categories.length && <Loader />}
      </Main>
      <GridItem justifySelf="center" gridArea="footer">
        <Button onClick={openNewMealView}>{t("create_new_meal")}</Button>
      </GridItem>
    </>
  );
};

export default CurrentMeals;
