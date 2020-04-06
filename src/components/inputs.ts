import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link, LinkProps } from "react-router-dom";

interface InputsProps {
  primary?: boolean;
  color?: string;
  bold?: boolean;
}

export const Button = styled.button<InputsProps>`
  background: ${({ primary }) => (primary ? colors.gunmetal : colors.shamrock)};
  color: ${({ primary }) => (primary ? colors.amber : colors.gunmetal)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
  cursor: pointer;
`;

export const LoginInput = styled.input<InputsProps>`
  background: #dab785;
  color: ${({ primary }) => (primary ? colors.amber : colors.gunmetal)};

  text-align: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.paleVioletRed};
`;

export const StyledLink = styled(Link)<LinkProps & InputsProps>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-weight: ${({ bold }) => bold && "bold"};
  text-decoration: none;
  text-align: center;
`;
