import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  background-color: ${Colors.lightbg};
  grid-column-start: ${props => props.col};
  grid-column-end: ${props => props.col + props.width};
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.row + props.height};
  border-radius: 15px;
`;
