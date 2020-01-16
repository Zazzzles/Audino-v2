import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  width: 100vw;
  margin-top: 200px;
  ${Layout.center}
`;

export const InnerWrapper = styled.div`
  width: 1100px;
  height: 450px;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px;
  background-color: ${Colors.lightbg};
  ${Layout.shadow}
`;

export const Card = styled.div`
  width: 450px;
  height: 120px;
  ${Layout.centerRow}
  border-radius: 15px;
  overflow: hidden;
  ${Layout.cardPadding}
  background-color: ${Colors.lightbg};
  ${Layout.shadow}
  border: 1px solid ${Colors.blend}
`;

export const IconWrapper = styled.div`
  ${Layout.center}
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: ${Colors.blendTransparent};
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const CardHeading = styled.span`
  color: white;
  font-size: 20px;
  margin-bottom: -10px;
  font-weight: 600;
`;

export const CardBody = styled.p`
  color: white;
  font-size: 15px;
  width: 330px;
  opacity: 0.7;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const AboutHeading = styled.span`
  color: white;
  font-size: 26px;
  font-weight: 800;
`;
export const AboutText = styled.p`
  color: white;
  font-size: 16px;
  line-height: 25px;
  width: 510px;
  margin-top: 35px;
  opacity: 0.7;
`;

export const ScrollButton = styled.div`
  margin-top: 50px;
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
