import styled from "styled-components";

import { Colors } from "../../utils/config";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${Colors.lightbg};
`;
