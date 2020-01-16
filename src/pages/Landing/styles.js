import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const MainWrapper = styled.div`
  height: 180vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  ${Layout.centerColumn}
`;

export const LandingWrapper = styled.div`
  ${Layout.fullscreen}
  ${Layout.center}
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  ${Layout.centerColumn}
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
  ${Layout.centerRow}
`;

export const BankImage = styled.img`
  width: 60px;
`;

export const DropzoneContainer = styled.div`
  height: 325px;
  width: 650px;
  background-color: ${Colors.lightbg};
  ${Layout.cardPadding}
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  ${Layout.shadow}
  &:hover {
    border: 1px solid ${Colors.blend};
  }
`;

export const DropzoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 180px;
`;

export const Button = styled.div`
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

export const ButtonPlaceholder = styled.div`
  height: 35px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  ${Layout.centerRow}
`;

export const LoadedFilesMessage = styled.div`
  color: white;
  margin-left: 20px;
  width: 300px;
  font-size: 13px;
  opacity: 0.5;
  font-weight: 600;
`;

export const DownArrowIcon = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 10px;
`;
