import React, { FC } from "react";

import { StyledFooter } from "./styles";

const Footer: FC = ({ children }) => (
  <StyledFooter justifySelf="center" gridArea="footer">
    {children}
  </StyledFooter>
);

export default Footer;
