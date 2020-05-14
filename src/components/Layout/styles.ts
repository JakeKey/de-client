import styled from "styled-components/macro";
import colors from "styles/colors";

export const HEADER_HEIGHT = "50px";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: ${HEADER_HEIGHT} repeat(2, minmax(0, 1fr)) 65px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-areas: "header header" "main main" "main main" "footer footer";
  grid-gap: 10px;
  justify-content: center;
  width: 100%;
  padding: 0 20px;

  & > div {
    overflow: auto;
  }
`;

export const Header = styled.div`
  align-self: center;
  justify-self: center;
  color: ${colors.blue};
  grid-area: header;
`;
