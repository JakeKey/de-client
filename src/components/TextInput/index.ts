import styled from "styled-components";

import colors from "styles/colors";

const TextInput = styled.input`
  background-color: ${colors.orange};
  color: ${colors.gunmetal};
  text-align: center;
  font-size: 15px;
  margin: 12px;
  padding: 5px 15px;
  border: 2px solid ${colors.paleVioletRed};
`;

export default TextInput;
