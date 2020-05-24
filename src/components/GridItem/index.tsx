import styled from "styled-components/macro";

type AlignmentType =
  | "normal"
  | "auto"
  | "start"
  | "end"
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "inherit"
  | "initial"
  | "unset";

interface Props {
  gridColumnStart?: string | number;
  gridColumnEnd?: string | number;
  gridRowStart?: string | number;
  gridRowEnd?: string | number;
  gridColumn?: string;
  gridRow?: string;
  gridArea?: string;
  justifySelf?: AlignmentType;
  alignSelf?: AlignmentType;
  placeSelf?: AlignmentType;
}

const GridItem = styled.div<Props>`
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  grid-area: ${({ gridArea }) => gridArea};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  place-self: ${({ placeSelf }) => placeSelf};
`;

export default GridItem;
