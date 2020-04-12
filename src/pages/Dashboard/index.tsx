import React, { FC } from "react";
import { connect } from "react-redux";

import usePrefix from "utils/usePrefix";

import NavMenu from "components/NavMenu";

import { Wrapper } from "./styles";

const Dashboard: FC = () => {
  const t = usePrefix("dashboard");
  return (
    <Wrapper alignContent="center">
      <NavMenu />
      {t("tasd")}
      Dashboard <br />
    </Wrapper>
  );
};
export default connect()(Dashboard);
