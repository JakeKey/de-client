import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";

import colors from "styles/colors";
import { breakpoints } from "utils/constants";

import Icon from "components/Icons";

export const Wrapper = styled.nav<{ isOpen: boolean }>`
  grid-area: nav;
  overflow: auto;
  border: 4px solid ${colors.amber};
  background-color: ${colors.dark_green};
  z-index: 2;

  @media only screen and (max-width: ${breakpoints.md.width}) {
    ${({ isOpen }) =>
      isOpen
        ? css`
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            padding-top: 20px;
            & > * {
              max-width: 300px;
              margin: auto;
            }
          `
        : css`
            display: none;
          `}
  }
`;

export const BurgerMenu = styled.div`
  padding-top: 20px;
`;

export const CloseContainer = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.md.width}) {
    display: inline-block;
  }
`;

export const AppTitle = styled.h1`
  width: 100%;
  font-size: 20px;
  text-align: center;
  vertical-align: center;
  white-space: pre-line;
`;

const navLinkStyles = css`
  display: block;
  text-decoration: none;
  text-align: center;

  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  background-color: rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;

export const NavItemLink = styled(NavLink)`
  ${navLinkStyles}

  &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const NavItem = styled.span`
  ${navLinkStyles}
  cursor: pointer;
`;
