import React from "react";
import { connect } from "react-redux";
import { DashboardWrapper } from "components/containers";
import NavMenu from "components/NavMenu";
import usePrefix from "utils/usePrefix";

const Dashboard = ({ t }: any) => {
  t = usePrefix("dashboard");
  return (
    <DashboardWrapper>
      <NavMenu />
      {t("tasd")}
      Dashboard <br />
    </DashboardWrapper>
  );
};
export default connect()(Dashboard);
