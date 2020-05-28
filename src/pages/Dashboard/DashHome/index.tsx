import React, { FC } from "react";
import usePrefix from "utils/usePrefix";

import Header from "components/Header";
import StyledLink from "components/StyledLink";

import { Description } from "./styles";

const DashHome: FC = () => {
  const t = usePrefix("home");

  return (
    <div>
      <Header title={t("welcome_to_diet_edtior")} />
      <Description>
        {t("description")}{" "}
        <StyledLink to="app/meals">{t("adding_new_meals")}</StyledLink>{" "}
        {t("and_then")}{" "}
        <StyledLink to="app/diets">{t("creating_your_diet")}</StyledLink>
      </Description>
    </div>
  );
};
export default DashHome;
