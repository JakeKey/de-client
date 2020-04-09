import React from "react";

import { Wrapper, Title, LoginForm } from "./styles";

interface Props {
  title: string;
}

const LoginPageContainer: React.FC<Props> = ({ title, children }) => (
  <Wrapper alignContent="center" flexDirection="column">
    <Title>{title}</Title>
    <LoginForm>{children}</LoginForm>
  </Wrapper>
);

export default LoginPageContainer;
