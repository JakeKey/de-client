import React, { FC } from "react";

import usePrefix from "utils/usePrefix";
import { DietsResponse } from "utils/api/types";

import List from "components/List";
import Loader from "components/Loader";
import Footer from "components/Footer";
import Button from "components/Button";
import Header from "components/Header";

import { Main } from "./styles";

interface Props {
  diets: DietsResponse;
  openNewDietView: () => void;
}

const CurrentDiets: FC<Props> = ({ diets, openNewDietView }) => {
  const t = usePrefix("diets");

  return (
    <>
      <Header title={t("my_diets")} />
      <Main gridArea="main">
        <List
          title={t("diets")}
          elements={diets.map(diet => ({ label: diet.name, id: diet._id }))}
        />
        {!diets.length && <Loader />}
      </Main>
      <Footer>
        <Button onClick={openNewDietView}>{t("create_new_diet")}</Button>
      </Footer>
    </>
  );
};

export default CurrentDiets;
