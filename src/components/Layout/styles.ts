import styled from "styled-components/macro";
import colors from "styles/colors";

export const HEADER_HEIGHT = "50px";

export const Wrapper = styled.div`
  display: grid;
  padding: 15px;
  grid-template-rows: ${HEADER_HEIGHT} 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const Title = styled.h1`
  justify-self: center;
  align-self: center;
  color: ${colors.blue};

  grid-column: 1 / span 2;
`;
