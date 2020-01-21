import React from "react";

import {
  Container,
  AmountContainer,
  AmountHeading,
  Amount,
  TextWrapper,
  Icon,
  IconContainer,
  LeftWrapper
} from "./styles";

import IncomeIcon from "../../assets/icons/panels/income.png";
import ExpensesIcon from "../../assets/icons/panels/expenses.png";
import NetIncomeIcon from "../../assets/icons/panels/netincome.png";

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
        <LeftWrapper>
          <IconContainer>
            <Icon src={IncomeIcon} />
          </IconContainer>
          <TextWrapper>
            <AmountHeading>TOTAL INCOME</AmountHeading>
            <Amount good>
              R{numberWithSpaces(getTotalIncome(transactions))}
            </Amount>
          </TextWrapper>
        </LeftWrapper>

        <TextWrapper>
          <AmountHeading>TRANSACTIONS</AmountHeading>
          <Amount>{getTotalIncomeTransactionCount(transactions)}</Amount>
        </TextWrapper>
      </AmountContainer>
      <AmountContainer borderBottom>
        <LeftWrapper>
          <IconContainer>
            <Icon src={ExpensesIcon} />
          </IconContainer>
          <TextWrapper>
            <AmountHeading>TOTAL EXPENSES</AmountHeading>
            <Amount bad>
              R{numberWithSpaces(getTotalExpenses(transactions))}
            </Amount>
          </TextWrapper>
        </LeftWrapper>

        <TextWrapper>
          <AmountHeading>TRANSACTIONS</AmountHeading>
          <Amount>{getTotalExpenseTransactionCount(transactions)}</Amount>
        </TextWrapper>
      </AmountContainer>
      <AmountContainer>
        <LeftWrapper>
          <IconContainer>
            <Icon src={NetIncomeIcon} />
          </IconContainer>
          <TextWrapper>
            <AmountHeading>NET INCOME</AmountHeading>
            <Amount>
              R
              {numberWithSpaces(
                getTotalIncome(transactions) + getTotalExpenses(transactions)
              )}
            </Amount>
          </TextWrapper>
        </LeftWrapper>
      </AmountContainer>
    </Container>
  );
}
