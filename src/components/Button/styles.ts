import styled, {
  css,
  FlattenSimpleInterpolation
} from "styled-components/macro";
import { NavLink } from "react-router-dom";

import colors from "styles/colors";

export type ButtonColors = "primary" | "transparent";

interface StyleProps {
  color: ButtonColors;
}

const buttonColors = (color: ButtonColors): FlattenSimpleInterpolation =>
  ({
    primary: css`
      background-color: ${colors.gunmetal};
      color: ${colors.amber};
      border: 2px solid ${colors.paleVioletRed};
      border-radius: 20px;
      padding: 4px 0;
      margin: 16px 0;
      min-width: 200px;
    `,
    transparent: css`
      font-weight: bold;
      background-color: transparent;
      color: ${colors.blue};
    `
  }[color]);

const buttonStyles = css<StyleProps>`
  border: 0;
  outline: 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${({ color }) => buttonColors(color)};
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const NavItem = styled(NavLink)`
  ${buttonStyles};
  text-decoration: none;
  text-align: center;

  &.active {
    opacity: 0.8;
  }
`;
