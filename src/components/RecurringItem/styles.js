import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  background-color: ${Colors.lightbg};
  height: 200px;
  width: calc(33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  ${Layout.cardPadding}
`;

export const PanelTopbar = styled.div`
  width: 100%;
  ${Layout.centerRow}
  border-bottom: 1px solid ${Colors.grey0};
  box-sizing: border-box;
  padding-bottom: 15px;
`;

export const IconContainer = styled.div`
  background-color: ${Colors.blendTransparent};
  height: 44px;
  width: 44px;
  border-radius: 22px;
  ${Layout.center}
`;

export const Icon = styled.img`
  height: 24px;
`;

export const PanelTitle = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 20px;
  font-weight: 600;
`;
