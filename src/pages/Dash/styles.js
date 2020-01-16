import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const MainWrapper = styled.div`
  ${Layout.fullscreen}
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  ${Layout.dashHorzPadding}
  padding-bottom: 50px;
`;
