import styled from "styled-components";

import { colors } from "styles/colors";

const Button = styled.button`
  background: ${colors.gunmetal};
  color: ${colors.amber};

  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
  cursor: pointer;
`;

export default Button;
