import styled, { css } from "styled-components/macro";

export const ListContainer = styled.ul`
  margin: 0;
  padding-left: 22px;
`;

export const Element = styled.li<{ onClick?: (id: number | string) => void }>`
  font-size: 14px;
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  & > svg {
    vertical-align: middle;
  }
`;
