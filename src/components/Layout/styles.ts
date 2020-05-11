import styled from "styled-components/macro";
import colors from "styles/colors";

export const HEADER_HEIGHT = "50px";

export const Wrapper = styled.div`
  display: grid;
  padding: 15px;
  grid-template-rows: ${HEADER_HEIGHT} 1fr 1fr 65px;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  width: 100%;

  & > div {
    overflow: auto;
  }
`;

export const Title = styled.div`
  align-self: center;
  justify-self: center;
  color: ${colors.blue};
  background-color: "red";
  grid-column-end: span 2;
`;
