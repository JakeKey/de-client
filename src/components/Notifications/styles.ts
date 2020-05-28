import styled from "styled-components/macro";

import colors from "styles/colors";
import Button from "components/Button";
import Icon from "components/Icons";
import FlexDiv from "components/FlexDiv";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 16px;
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  z-index: 1050;
  p {
    margin: 0;
  }
`;

export const Container = styled(FlexDiv)`
  position: relative;
  margin-bottom: 16px;
  padding: 8px 16px;
  width: 250px;
  background-color: ${colors.gray};
`;

export const IconBox = styled(FlexDiv)`
  flex: 0 0 24px;
  margin: 0 8px 0 0;
`;

export const Message = styled.div`
  flex: 1;
`;

export const ButtonClose = styled(Button)`
  padding: 0;
  min-width: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  path {
    fill: ${colors.white};
    transition: fill 0.2s ease;
  }
  @media (hover: hover) {
    &:hover {
      path {
        fill: ${colors.white_half};
      }
    }
  }
`;

export const IconStyled = styled(Icon)<{ color: string }>`
  path {
    fill: ${({ color }) => color};
  }
`;
