import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

import { colors } from "styles/colors";

const StyledLink = styled(Link)<LinkProps>`
  color: ${colors.blue};
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;

export default StyledLink;
