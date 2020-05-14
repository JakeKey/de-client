import React, { FC } from "react";

import { Wrapper, Header } from "./styles";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Header>
      <h1> {title}</h1>
    </Header>
    {children}
  </Wrapper>
);

export default Layout;
