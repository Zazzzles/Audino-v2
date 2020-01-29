import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  ${Layout.centerColumn}
`;

export const Text = styled.div`
  color: ${Colors.grey2};
  font-size: 23px;
`;

export const Image = styled.img`
  height: 200px;
  margin-top: 170px;
  margin-bottom: 20px;
`;
