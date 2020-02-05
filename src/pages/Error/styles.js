import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  ${Layout.center}
`;

export const Panel = styled.div`
  height: 270px;
  width: 490px;
  border-radius: 20px;
  background-color: ${Colors.lightbg};
  ${Layout.shadow}
  ${Layout.cardPadding}
  ${Layout.centerColumn}
  border: 1px solid transparent;
  transition: all 0.2s;
  &:hover{
      border: 1px solid ${Colors.blend}
  }
`;

export const Icon = styled.img`
  height: 35px;
`;

export const IconContainer = styled.div`
  background-color: ${Colors.blendTransparent};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-bottom: 15px;
  ${Layout.center}
`;

export const ErrorText = styled.div`
  color: white;
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 800;
`;

export const ErrorSubText = styled.div`
  color: white;
  font-size: 15px;
`;

export const Button = styled.div`
  margin-top: 20px;
  height: 35px;
  border-radius: 7px;
  width: 160px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: 700;
  ${Layout.gradientBg}
  ${Layout.center}
`;
