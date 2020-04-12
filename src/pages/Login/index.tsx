import React, { useState, ChangeEvent, FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { userLogin } from "store/actions";
import usePrefix from "utils/usePrefix";

import Button from "components/Button";
import LoginPageContainer from "components/LoginPageContainer";
import StyledLink from "components/StyledLink";
import TextInput from "components/TextInput";
import Text from "components/Text";

const connector = connect(null, { userLogin });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login: FC<PropsFromRedux> = ({ userLogin }) => {
  const t = usePrefix("landingpage");

  const [state, setState] = useState({ username: "", password: "" });

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, username: value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, password: value });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    userLogin(state.username, state.password);
  };

  return (
    <LoginPageContainer title={t("login_title")}>
      <TextInput
        type={"text"}
        name={"username"}
        placeholder={t("username_input")}
        onChange={handleUsername}
        value={state.username}
      />
      <TextInput
        type={"password"}
        name={"password"}
        placeholder={t("password_input")}
        onChange={handlePassword}
        value={state.password}
      />
      <Button type={"submit"} onClick={handleLogin}>
        {t("login_button")}
      </Button>
      <Text>{t("login_or")}</Text>
      <StyledLink to="/register">{t("register_button")}</StyledLink>
    </LoginPageContainer>
  );
};

export default connector(Login);
