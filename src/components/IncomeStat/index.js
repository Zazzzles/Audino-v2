import React from "react";

import {
  Container,
  AmountContainer,
  AmountHeading,
  Amount,
  TextWrapper
} from "./styles";

import {
  getTotalIncome,
  getTotalExpenses,
  getTotalIncomeTransactionCount,
  getTotalExpenseTransactionCount
} from "../../utils/methods";

import { numberWithSpaces } from "../../utils/formatting";

export default function IncomeStat({ transactions }) {
  return (
    <Container>
      <AmountContainer borderBottom>
        <TextWrapper>
          <AmountHeading>TOTAL INCOME</AmountHeading>
          <Amount good>
            R{numberWithSpaces(getTotalIncome(transactions))}
          </Amount>
        </TextWrapper>
        <TextWrapper>
          <AmountHeading>TRANSACTIONS</AmountHeading>
          <Amount>{getTotalIncomeTransactionCount(transactions)}</Amount>
        </TextWrapper>
      </AmountContainer>
      <AmountContainer borderBottom>
        <TextWrapper>
          <AmountHeading>TOTAL EXPENSES</AmountHeading>
          <Amount bad>
            R{numberWithSpaces(getTotalExpenses(transactions))}
          </Amount>
        </TextWrapper>
        <TextWrapper>
          <AmountHeading>TRANSACTIONS</AmountHeading>
          <Amount>{getTotalExpenseTransactionCount(transactions)}</Amount>
        </TextWrapper>
      </AmountContainer>
      <AmountContainer>
        <TextWrapper>
          <AmountHeading>NET INCOME</AmountHeading>
          <Amount>
            R
            {numberWithSpaces(
              getTotalIncome(transactions) + getTotalExpenses(transactions)
            )}
          </Amount>
        </TextWrapper>
      </AmountContainer>
    </Container>
  );
}
