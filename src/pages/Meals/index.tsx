import React, { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { connect, ConnectedProps } from "react-redux";

import { MEALS_ROUTE } from "config";
import api from "utils/api";
import { MealsResponse } from "utils/api/types";
import { setNotification } from "store/actions";
import { notificationTypes } from "utils/constants";

import NewMeal from "./NewMeal";
import CurrentMeals from "./CurrentMeals";

const connector = connect(null, { setNotification });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Meals: FC<PropsFromRedux> = ({ setNotification }) => {
  const [meals, setMeals] = useState<MealsResponse>([]);
  const [newMealView, setNewMealView] = useState(false);

  const getMeals = async () => {
    try {
      const result: AxiosResponse<MealsResponse> = await api(MEALS_ROUTE, {
        method: "GET"
      });

      if (!!result && !!result.data && !!result.data.length)
        setMeals(result.data);
      else setNewMealView(true);
    } catch (err) {
      setNotification({ code: err.code, type: notificationTypes.error });
    }
  };

  useEffect(() => {
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefetchMeals = async () => {
    await getMeals();
    setNewMealView(false);
  };

  console.log("meals", meals);

  return newMealView ? (
    <NewMeal
      closeNewMealView={() => setNewMealView(false)}
      anyMeals={!!meals.length}
      handleRefetchMeals={handleRefetchMeals}
    />
  ) : (
    <CurrentMeals meals={meals} openNewMealView={() => setNewMealView(true)} />
  );
};

export default connector(Meals);
