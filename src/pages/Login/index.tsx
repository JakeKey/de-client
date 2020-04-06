import React from "react";
import { connect } from "react-redux";

import usePrefix from "utils/usePrefix";

import { LandingPageWrapper } from "components/containers";
import { Title } from "components/texts";

import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  const t = usePrefix("landingpage");
  return (
    <LandingPageWrapper>
      <Title>{t("login_title")}</Title>
      <LoginForm />
    </LandingPageWrapper>
  );
};

export default connect()(Login);
