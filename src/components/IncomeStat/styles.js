import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Container = styled.div`
  width: 100%;
  ${Layout.centerColumn}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmountHeading = styled.div`
  color: ${Colors.grey0};
  font-size: 15px;
`;

export const Amount = styled.div`
  color: white;
  ${props => props.good && `color: ${Colors.green};`}
  ${props => props.bad && `color: ${Colors.red};`}
  font-size: 30px;
`;

export const AmountContainer = styled.div`
  width: 80%;
  padding-top: 10px;
  padding-bottom: 7px;
  box-sizing: border-box;
  ${Layout.centerRow}
  justify-content: space-between;
  ${props => props.borderBottom && `border-bottom: 1px solid ${Colors.grey0}`}
`;
