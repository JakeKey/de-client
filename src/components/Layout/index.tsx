import React, { FC } from "react";

import { Wrapper, Title } from "./styles";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Layout;
