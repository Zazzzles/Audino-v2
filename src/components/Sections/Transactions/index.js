import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { Container } from "./styles";

//  Components
import Panel from "../../Panel";
import Table from "../../Table";
//  Assets
import ListIcon from "../../../assets/icons/panels/transaction_list.png";
import CashflowIcon from "../../../assets/icons/panels/cashflow.png";
import IncomeIcon from "../../../assets/icons/panels/income.png";
import ExpensesIcon from "../../../assets/icons/panels/expenses.png";
export default class Transactions extends Component {
  state = {};

  render() {
    const { transactions } = this.props;
    return (
      <Container>
        <Panel
          height={2}
          width={1}
          row={1}
          col={1}
          icon={ListIcon}
          title={"TRANSACTION LIST"}
        >
          <Table data={transactions} />
        </Panel>
        <Panel
          height={1}
          width={2}
          row={1}
          col={2}
          icon={CashflowIcon}
          title={"CASHFLOW"}
        />
        <Panel
          height={1}
          width={1}
          row={2}
          col={2}
          icon={IncomeIcon}
          title={"INCOME"}
        />
        <Panel
          height={1}
          width={1}
          row={2}
          col={3}
          icon={ExpensesIcon}
          title={"EXPENSES"}
        />
      </Container>
    );
  }
}
