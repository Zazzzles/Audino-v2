import styled from "styled-components";
import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  width: 100%;
  height: 644px;
  overflow: scroll;
`;

export const TableRow = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  align-items: center;
  background-color: ${props => (props.light ? Colors.grey0 : "transparent")};
`;
export const RowItem = styled.div`
  width: ${props => props.width};
  color: white;
  font-size: 12px;
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  opacity: ${props => props.opacity};
`;
