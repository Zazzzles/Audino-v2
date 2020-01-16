import styled from "styled-components";

import { Colors, Layout } from "../../../utils/config";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 30% 33% 33%;
  grid-template-rows: 49% 49%;
`;
