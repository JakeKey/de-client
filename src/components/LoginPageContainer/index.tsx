import React, { ReactNode } from "react";
import { Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "store/reducers";

import { Wrapper, Title, LoginForm } from "./styles";

const mapStateToProps = ({ user }: RootState) => {
  const { userdata } = user;
  return { userdata };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  title: string;
  children?: ReactNode;
}

const LoginPageContainer: React.FC<Props & PropsFromRedux> = ({
  title,
  children,
  userdata
}) => {
  if (userdata) return <Redirect to="/app" />;

  return (
    <Wrapper alignContent="center" flexDirection="column">
      <Title>{title}</Title>
      <LoginForm>{children}</LoginForm>
    </Wrapper>
  );
};

export default connector(LoginPageContainer);
