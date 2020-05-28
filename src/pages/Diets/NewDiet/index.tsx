/* eslint-disable no-magic-numbers */
import React, { useState, useEffect, FC } from "react";
import ReactSelect, { ValueType } from "react-select";
import { AxiosResponse } from "axios";
import { connect, ConnectedProps } from "react-redux";

import { MEALS_ROUTE, MEALS_CATEGORIES_ROUTE, DIETS_ROUTE } from "config";
import { setNotification } from "store/actions";
import { notificationTypes, ALL_MEALS_CATEGORY, ENERGY } from "utils/constants";
import api from "utils/api";
import usePrefix from "utils/usePrefix";
import {
  MealType,
  ProductsCategoriesType,
  NutrientsType,
  MealsResponse,
  MealCategoriesAllType,
  MealCategoriesResponse,
  ProductNutrientsType,
  DayType,
  DietsResponse
} from "utils/api/types";
import { getMealsNutrients } from "utils/misc";
import colors from "styles/colors";

import List from "components/List";
import TextInput from "components/TextInput";
import Button from "components/Button";
import FlexDiv from "components/FlexDiv";
import Footer from "components/Footer";
import GridItem from "components/GridItem";
import Header from "components/Header";
import { customSelectStyle } from "components/Select";

import { NewDietLayout, SubHeader, DietData, BackButton } from "./styles";

const connector = connect(null, { setNotification });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  anyDiets: boolean;
  closeNewDietView: () => void;
  handleRefetchDiets: () => void;
}

interface CategoryOption {
  value: ProductsCategoriesType;
  label: string;
}

interface MealOption {
  value: MealType;
  label: string;
}

interface MealCategoryOption {
  value: MealCategoriesAllType;
  label: string;
}

interface OptionsTypes {
  meals: MealOption[];
  mealCategories: MealCategoryOption[];
}

const NewDiet: FC<PropsFromRedux & Props> = ({
  anyDiets,
  closeNewDietView,
  setNotification,
  handleRefetchDiets
}) => {
  const t = usePrefix("diets");
  const tg = usePrefix("general");

  const [dietName, setDietName] = useState("");
  const [mealCategory, setMealCategory] = useState<
    ValueType<MealCategoryOption>
  >(undefined);
  const [options, setOptions] = useState<OptionsTypes>({
    meals: [],
    mealCategories: []
  });
  const [meal, setMeal] = useState<ValueType<MealOption>>(undefined);
  const [dayMeals, setDayMeals] = useState<MealType[]>([]);
  const [currentDayNutrients, setCurrentDayNutrients] = useState<
    ProductNutrientsType
  >();
  const [days, setDays] = useState<DayType[]>([]);

  const getMealsCategories = async () => {
    try {
      const result: AxiosResponse<MealCategoriesResponse> | void = await api(
        MEALS_CATEGORIES_ROUTE,
        {
          method: "GET"
        }
      );

      if (!!result && !!result.data && !!result.data.length) {
        const categoriesOptions = result.data.map(category => ({
          value: category,
          label: tg(category)
        }));
        setOptions(prevState => ({
          ...prevState,
          mealCategories: [
            { value: ALL_MEALS_CATEGORY, label: tg(ALL_MEALS_CATEGORY) },
            ...categoriesOptions
          ]
        }));
      }
    } catch (err) {
      setNotification({ code: err.code, type: notificationTypes.error });
    }
  };

  const getMeals = async (category: MealCategoriesAllType) => {
    try {
      const result: AxiosResponse<MealsResponse> | void = await api(
        `${MEALS_ROUTE}${
          category === ALL_MEALS_CATEGORY ? "" : `?category=${category}`
        }`,
        {
          method: "GET"
        }
      );

      if (!!result && !!result.data && !!result.data.length) {
        const mealsOptions = result.data.map(meal => ({
          value: meal,
          label: meal.name
        }));
        setOptions(prevState => ({
          ...prevState,
          meals: mealsOptions
        }));
      }
    } catch (err) {
      setNotification({ code: err.code, type: notificationTypes.error });
    }
  };

  useEffect(() => {
    getMealsCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mealCategory && "value" in mealCategory) {
      getMeals(mealCategory.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealCategory]);

  const handleMealAdd = (meal: MealOption) =>
    dayMeals.some(currentMeal => meal.value._id === currentMeal._id)
      ? setNotification({
          code: "MEAL_ALREADY_ADDED",
          type: notificationTypes.error
        })
      : setDayMeals([...dayMeals, meal.value]);

  const handleMealRemove = (id: string | number) =>
    setDayMeals(dayMeals.filter(prod => prod._id !== id));

  useEffect(() => {
    setCurrentDayNutrients(
      dayMeals.length ? getMealsNutrients(dayMeals) : undefined
    );
  }, [dayMeals]);

  const handleDayAdd = () => {
    setDays([
      ...days,
      { meals: dayMeals.map(dayMeal => dayMeal._id), index: days.length + 1 }
    ]);
    setDayMeals([]);
  };

  const handleDietAdd = async () => {
    try {
      const result: AxiosResponse<DietsResponse> | void = await api(
        DIETS_ROUTE,
        {
          method: "POST",
          data: {
            name: dietName,
            days
          }
        }
      );
      if (result && result.data) {
        handleRefetchDiets();
        setNotification({
          code: "DIET_ADDED",
          type: notificationTypes.success
        });
      }
    } catch (err) {
      setNotification({ code: err.code, type: notificationTypes.error });
    }
  };

  return (
    <>
      <Header title={t("create_new_diet")} />
      <GridItem gridArea="main">
        <NewDietLayout>
          <SubHeader gridColumn="1 / -1" placeSelf="center">
            <h2>{t("day_nth", { index: days.length + 1 })}</h2>
          </SubHeader>
          <DietData>
            <TextInput
              name="diet_name"
              placeholder={t("type_diet_name")}
              label={t("diet_name")}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDietName(e.target.value)
              }
              value={dietName}
              margin="0 0 5px"
            />

            <ReactSelect
              onChange={(value: ValueType<MealCategoryOption>) => {
                setMealCategory(value);
                setMeal(null);
              }}
              options={options.mealCategories}
              value={mealCategory}
              isSearchable={false}
              placeholder={t("select_meal_category")}
              styles={customSelectStyle({ margin: "0 0 5px" })}
            />

            <ReactSelect
              onChange={(value: ValueType<MealOption>) => {
                setMeal(value);
              }}
              options={options.meals}
              value={meal}
              isSearchable={false}
              placeholder={t("select_meal")}
              styles={customSelectStyle({ margin: "0 0 5px" })}
            />
            {meal && "value" in meal && (
              <>
                <List
                  title={t("meal_nutrients")}
                  elements={(Object.keys(
                    meal.value.nutrients
                  ) as NutrientsType[]).map(nutr =>
                    nutr !== ENERGY
                      ? {
                          label: `${tg(nutr)}: ${meal.value.nutrients[
                            nutr
                          ].toFixed(2)}g`,
                          id: tg(nutr)
                        }
                      : {
                          label: `${tg(nutr)}: ${meal.value.nutrients[
                            nutr
                          ].toFixed(2)}kcal`,
                          id: tg(nutr)
                        }
                  )}
                />
                <FlexDiv alignItems="center">
                  <Button
                    color="transparent"
                    margin="10px"
                    onClick={() => handleMealAdd(meal)}
                  >
                    {t("add_meal")}
                  </Button>
                </FlexDiv>
              </>
            )}
          </DietData>
          <GridItem>
            {currentDayNutrients ? (
              <List
                title={t("current_day_nutrients")}
                elements={(Object.keys(
                  currentDayNutrients
                ) as NutrientsType[]).map(nutr =>
                  nutr !== ENERGY
                    ? {
                        label: `${tg(nutr)}: ${currentDayNutrients[
                          nutr
                        ].toFixed(2)}g`,
                        id: tg(nutr)
                      }
                    : {
                        label: `${tg(nutr)}: ${currentDayNutrients[
                          nutr
                        ].toFixed(2)}kcal`,
                        id: tg(nutr)
                      }
                )}
              />
            ) : (
              t("add_meals")
            )}
          </GridItem>

          <GridItem>
            {dayMeals.length ? (
              <List
                title={t("current_meals")}
                elements={dayMeals.map(meal => ({
                  label: `${meal.name} ${meal.nutrients.energy.toFixed(1)}kcal`,
                  id: meal._id
                }))}
                icon="minus"
                iconColor={colors.red}
                onClick={handleMealRemove}
              />
            ) : (
              t("add_meals")
            )}
          </GridItem>
        </NewDietLayout>
      </GridItem>
      <Footer>
        {anyDiets && (
          <BackButton
            color="transparent"
            onClick={closeNewDietView}
            margin="16px 5px"
            size="md"
          >
            {t("go_back")}
          </BackButton>
        )}

        <Button
          onClick={handleDayAdd}
          margin="16px 5px"
          disabled={!dayMeals.length}
          size="md"
        >
          {t("add_this_day")}
        </Button>
        <Button
          onClick={handleDietAdd}
          margin="16px 5px"
          disabled={!days.length || !dietName}
          size="md"
        >
          {t("finish_diet")}
        </Button>
      </Footer>
    </>
  );
};

export default connector(NewDiet);
