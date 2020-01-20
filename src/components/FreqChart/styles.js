import styled from "styled-components";
import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const MonthContainer = styled.div`
  height: 80px;
  width: 95px;
  padding: 2px;
`;

export const MonthLabel = styled.div`
  color: white;
  font-size: 10px;
  margin-bottom: 2px;
`;

export const MonthInner = styled.div`
  height: 65px;
  width: 85px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-content: flex-start;
`;

export const MonthSquare = styled.div`
  height: 8px;
  width: 8px;
  margin: 2px;
  opacity: ${props => props.opacity};
  background-color: ${Colors.blend};
  border-radius: 1px;
`;
