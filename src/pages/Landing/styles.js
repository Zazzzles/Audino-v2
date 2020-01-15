import styled from "styled-components";

import { Colors } from "../../utils/config";

export const MainWrapper = styled.div`
  height: 150vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const TagLine = styled.span`
  color: ${Colors.grey2};
`;

export const DropzoneTopbar = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid ${Colors.grey1};
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DropzoneTopbarHeadings = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropzoneHeading = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

export const DropzoneSubheading = styled.span`
  color: ${Colors.grey2};
`;

export const BankImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BankImage = styled.img`
  width: 60px;
`;

export const DropzoneWrapper = styled.div`
  margin-left: 180px;
  height: 325px;
  width: 650px;
  background-color: ${Colors.lightbg};
  box-sizing: border-box;
  padding: 25px;
  border-radius: 20px;
`;
