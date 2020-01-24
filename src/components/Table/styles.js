import styled from "styled-components";
import { Colors, Layout } from "../../utils/config";

export const Wrapper = styled.div`
  ${Layout.centerColumn}
`;

export const Container = styled.div`
  width: 100%;
  height: ${props => props.height}px;
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
  background-color: ${props =>
    props.light ? Colors.blendTransparent1 : "transparent"};
`;
export const RowItem = styled.div`
  width: ${props => props.width};
  color: white;
  font-size: 12px;
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  opacity: ${props => props.opacity};
`;

export const MonthContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const MonthName = styled.div`
  color: white;
  font-size: 20px;
`;

export const TransactionCount = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 12px;
`;

export const YearName = styled.div`
  color: white;
  opacity: 0.5;
  font-size: 20px;
`;

export const MonthIndicator = styled.div`
  height: 35px;
  ${Layout.centerRow}
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  ${Layout.gradientBgRev}
`;
