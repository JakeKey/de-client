import styled from "styled-components/macro";

export const Wrapper = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 22px;
`;

export const Element = styled.li<{ onClick: any }>`
  font-size: 14px;
  ${({ onClick }) => onClick && "cursor: pointer"}
`;
