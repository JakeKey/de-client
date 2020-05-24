import React, { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => (
  <Wrapper>
    <h1> {title}</h1>
  </Wrapper>
);

export default Header;
