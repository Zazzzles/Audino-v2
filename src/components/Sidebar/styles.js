import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  height: 100vh;
  width: 15%;
  background-color: ${Colors.lightbg};
`;

export const LogoContainer = styled.div`
  ${Layout.center}
  height: 240px;
`;

export const LogoImage = styled.img`
  height: 50px;
`;

export const NavItemContainer = styled.div`
  ${Layout.centerRow}
  height: 60px;
  cursor: pointer;
  border-top: 1px solid ${Colors.grey0};
  ${props =>
    props.hasBottomBorder && `border-bottom:  1px solid ${Colors.grey0};`}
`;

export const NavItemIcon = styled.img`
  height: 30px;
  transition: all 0.3s;
  margin-left: 20px;
  margin-right: 20px;
  opacity: ${props => (props.active ? 1 : 0.2)};
`;

export const NavItemLabel = styled.div`
  transition: all 0.3s;
  color: ${props => (props.active ? "white" : Colors.grey1)};
  font-size: ${props => (props.active ? "18px" : "15px")};
`;

export const ActiveNavIndicator = styled.div`
  ${Layout.gradientBg}
  height: 100%;
  transition: all 0.3s;
  width: ${props => (props.active ? "5px" : "0px")};
`;
export const ActiveNavIndicatorPlaceholder = styled.div`
  height: 100%;
  transition: all 0.3s;
  width: ${props => (!props.active ? "5px" : "0px")};
`;
