import styled from "styled-components/macro";

type AlignContentType =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "space-between"
  | "space-evenly"
  | "space-around";

type AlignItemsType =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch";

type FlexWrapType =
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "inherit"
  | "initial"
  | "unset";

type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";

interface Props {
  alignItems?: AlignItemsType;
  alignContent?: AlignContentType;
  justifyContent?: AlignContentType;
  flex?: number | string;
  flexWrap?: FlexWrapType;
  flexDirection?: FlexDirectionType;

  margin?: string;
}

const FlexDiv = styled.div<Props>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ flex }) => flex || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};

  margin: ${({ margin }) => margin};
`;

export default FlexDiv;
