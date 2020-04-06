import React from "react";
import { connect } from "react-redux";

import usePrefix from "utils/usePrefix";

import { LandingPageWrapper } from "components/containers";
import { Title } from "components/texts";

import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
  const t = usePrefix("landingpage");

  return (
    <LandingPageWrapper>
      <Title>{t("register_title")}</Title>
      <RegisterForm />
    </LandingPageWrapper>
  );
};

export default connect()(Register);
