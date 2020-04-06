import React, { useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Button, LoginInput, StyledLink } from "components/inputs";
import { userLogin } from "store/actions";
import { LoginFormWrapper } from "components/containers";
import { SimpleText } from "components/texts";
import usePrefix from "utils/usePrefix";

const LoginForm: React.FC = ({ userLogin }: any) => {
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
    <LoginFormWrapper>
      <LoginFields
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        username={state.username}
        password={state.password}
      />
      <Button primary type={"submit"} onClick={handleLogin}>
        {t("login_button")}
      </Button>
      <SimpleText>{t("login_or")} </SimpleText>
      <StyledLink color={"#00798c"} bold to="/register">
        {t("register_button")}
      </StyledLink>
    </LoginFormWrapper>
  );
};

const LoginFields = ({
  t,
  handleUsername,
  handlePassword,
  username,
  password
}: any) => (
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
  </>
);

const mapStateToProps = () => null;
//const { token } = user;
//return {};

export default connect(mapStateToProps, { userLogin })(LoginForm);
