import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
  ${Layout.centerRow}
  justify-content: space-between;
`;

export const TitleGroup = styled.div`
  ${Layout.centerRow}
  width: 350px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  color: white;
  font-size: 36px;
  margin-bottom: 5px;
`;

export const PageSubtitle = styled.div`
  color: ${Colors.grey1};
`;

export const BackArrowImg = styled.img`
  height: 40px;
  cursor: pointer;
  margin-right: 24px;
`;
