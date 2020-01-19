import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  height: 50px;
  ${Layout.centerRow}
`;

export const MonthItem = styled.div`
  ${Layout.centerColumn}
  cursor: pointer;
  margin-right: 15px;
  transition: all 0.3s;
  color: ${props => (props.active ? "white" : Colors.grey1)};
`;

export const ActiveIndicator = styled.div`
  ${props =>
    props.active ? Layout.gradientBg : "background-color: transparent;"}
  margin-top: 2px;
  transition: all 0.3s;
  height: 3px;
  width: 100%;
`;
