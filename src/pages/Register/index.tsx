import React, { useState, ChangeEvent, FC, MouseEvent, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";

import usePrefix from "utils/usePrefix";
import { userRegister } from "store/actions";
import { REACT_APP_RECAPTCHA_PUBLIC } from "config";

import Button from "components/Button";
import LoginPageContainer from "components/LoginPageContainer";
import StyledLink from "components/StyledLink";
import TextInput from "components/TextInput";

const connector = connect(null, { userRegister });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Register: FC<PropsFromRedux> = ({ userRegister }) => {
  const t = usePrefix("landingpage");

  const reCaptchaRef = useRef<ReCAPTCHA>(null);

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

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reCaptchaRef.current?.execute();
  };

  const onReCaptchaChange = (token: string | null) => {
    if (
      !state.username ||
      !state.password ||
      state.password !== state.passwordVerify
    )
      return;
    userRegister(state.username, state.password, token);
  };

  return (
    <LoginPageContainer title={t("register_title")}>
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
      <TextInput
        type={"password"}
        name={"password_verify"}
        placeholder={t("password_verify_input")}
        onChange={handlePasswordVerify}
        value={state.passwordVerify}
      />
      <Button type="submit" onClick={handleRegister}>
        {t("register")}
      </Button>
      <StyledLink to="/">{t("register_back")}</StyledLink>
      <ReCAPTCHA
        sitekey={REACT_APP_RECAPTCHA_PUBLIC ? REACT_APP_RECAPTCHA_PUBLIC : ""}
        onChange={onReCaptchaChange}
        size="invisible"
        ref={reCaptchaRef}
      />
    </LoginPageContainer>
  );
};

export default connector(Register);
