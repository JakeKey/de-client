import React, { useState, ChangeEvent } from "react";
import { connect } from "react-redux";

import usePrefix from "utils/usePrefix";
import { userRegister } from "store/actions";

import { Button, LoginInput, StyledLink } from "components/inputs";
import { LoginFormWrapper } from "components/containers";

function RegisterForm({ userRegister, userdata }: any) {
  const t = usePrefix("landingpage");

  const [state, setState] = useState({
    username: "",
    password: "",
    passwordVerify: ""
  });

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, username: value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, password: value });
  };

  const handlePasswordVerify = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, passwordVerify: value });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    // TODO add verification
    if (state.password !== state.passwordVerify) return;
    userRegister(state.username, state.password);
  };
  console.log("userdata", userdata);
  return (
    <LoginFormWrapper onSubmit={handleRegister}>
      <RegisterFields
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handlePasswordVerify={handlePasswordVerify}
        username={state.username}
        password={state.password}
        passwordVerify={state.passwordVerify}
      />
      <Button primary type={"submit"}>
        {t("register")}
      </Button>
      <StyledLink color={"#00798c"} bold to="/">
        {t("register_back")}
      </StyledLink>
    </LoginFormWrapper>
  );
}

function RegisterFields({
  t,
  handleUsername,
  handlePassword,
  handlePasswordVerify,
  username,
  password,
  passwordVerify
}: any) {
  return (
    <>
      <LoginInput
        type={"text"}
        name={"username"}
        placeholder={t("username_input")}
        onChange={handleUsername}
        value={username}
      />
      <LoginInput
        type={"password"}
        name={"password"}
        placeholder={t("password_input")}
        onChange={handlePassword}
        value={password}
      />
      <LoginInput
        type={"password"}
        name={"password_verify"}
        placeholder={t("password_verify_input")}
        onChange={handlePasswordVerify}
        value={passwordVerify}
      />
    </>
  );
}

const mapStateToProps = ({ user }: any) => {
  const { userdata } = user;
  return { userdata };
};

export default connect(mapStateToProps, { userRegister })(RegisterForm);
