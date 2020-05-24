import React, { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { MEALS_ROUTE } from "config";
import api from "utils/api";
import { MealsResponse } from "utils/api/types";

import NewMeal from "./NewMeal";
import CurrentMeals from "./CurrentMeals";

const Meals: FC = () => {
  const [meals, setMeals] = useState<MealsResponse>([]);
  const [newMealView, setNewMealView] = useState(false);

  const getMeals = async () => {
    const result: AxiosResponse<MealsResponse> | void = await api(MEALS_ROUTE, {
      method: "GET"
    });

    if (!!result && !!result.data && !!result.data.length)
      setMeals(result.data);
    else setNewMealView(true);
  };

  useEffect(() => {
    getMeals();
  }, []);

  console.log("meals", meals);

  return newMealView ? (
    <NewMeal
      closeNewMealView={() => setNewMealView(false)}
      anyMeals={!!meals.length}
    />
  ) : (
    <CurrentMeals meals={meals} openNewMealView={() => setNewMealView(true)} />
  );
};

export default Meals;
