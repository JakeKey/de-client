import React, { FC } from "react";
import usePrefix from "utils/usePrefix";

import { Container } from "./styles";

const Loader: FC = () => {
  const t = usePrefix("general");
  return <Container>{t("loading")}</Container>;
};
export default Loader;
