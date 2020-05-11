import React, { FC } from "react";

import { Wrapper, Title } from "./styles";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Title>
      <h1> {title}</h1>
    </Title>
    {children}
  </Wrapper>
);

export default Layout;
