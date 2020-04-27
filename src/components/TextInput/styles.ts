import styled from "styled-components/macro";

import colors from "styles/colors";

export const Wrapper = styled.div`
  margin: 12px 0;
`;

export const StyledInput = styled.input`
  background-color: ${colors.orange};
  color: ${colors.gunmetal};
  text-align: center;
  font-size: 15px;
  padding: 5px 15px;
  border: 2px solid ${colors.paleVioletRed};
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${colors.gray};
  display: block;
  font-size: 11px;
  margin-bottom: 4px;
`;
