import React, { FC } from "react";

import usePrefix from "utils/usePrefix";

import Layout from "components/Layout";

import NewMeal from "./NewMeal";

const Meals: FC = () => {
  const t = usePrefix("meals");

  return (
    <Layout title={t("meals")}>
      <NewMeal />
    </Layout>
  );
};

export default Meals;
