import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import colors from "styles/colors";

const buttonStyles = css`
  background: ${colors.gunmetal};
  color: ${colors.amber};
  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const StyledButtonLink = styled(Link)`
  ${buttonStyles};
  text-decoration: none;
  text-align: center;
`;
