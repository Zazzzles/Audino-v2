import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { Container, TransactionCountDisplay, ChartContainer } from "./styles";

//  Components
import Panel from "../../Panel";
import Table from "../../Table";
import Linechart from "../../Charts/Linechart";
//  Assets
import ListIcon from "../../../assets/icons/panels/transaction_list.png";
import CashflowIcon from "../../../assets/icons/panels/cashflow.png";
import IncomeIcon from "../../../assets/icons/panels/income.png";
import ExpensesIcon from "../../../assets/icons/panels/expenses.png";
//  Helpers
import { sortByMonth, addAmounts } from "../../../utils/methods";
import { MonthsLong } from "../../../utils/config";
import {
  mapToColor,
  isolateDate,
  isolateAmount,
  isolateTransactionCounts
} from "../../../utils/formatting";

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chartContainerRef = React.createRef();
    this.linechart = React.createRef();
  }

  componentWillReceiveProps = () => {
    this.update();
  };

  componentDidMount = () => {
    this.update();
  };

  update = () => {
    let transactions = this.getTransactionsToRender();

    const amountsAdded = addAmounts(transactions);
    const data = isolateAmount(amountsAdded);
    const labels = isolateDate(amountsAdded);

    this.lineChart &&
      this.lineChart.update &&
      this.lineChart.update({
        datasets: [
          {
            label: "Amount",
            data: data.reverse(),
            backgroundColor: mapToColor("rgba(96, 159, 235, 0.5)", data),
            borderColor: mapToColor("rgba(96, 159, 235, 1)", data)
          }
        ],
        labels: labels.reverse(),
        yAxisToken: "R"
      });
  };

  getTransactionsToRender = () => {
    const { transactions, selectedMonth } = this.props;
    if (selectedMonth === 0) {
      return transactions;
    } else {
      return sortByMonth(transactions)[selectedMonth];
    }
  };

  render() {
    const { selectedMonth } = this.props;
    let transactions = this.getTransactionsToRender();
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
          <TransactionCountDisplay>
            {transactions.length} transactions •{" "}
            {selectedMonth === 0 ? "All" : MonthsLong[selectedMonth - 1]}
          </TransactionCountDisplay>
          <Table data={transactions} />
        </Panel>
        <Panel
          height={1}
          width={2}
          row={1}
          col={2}
          icon={CashflowIcon}
          title={"CASHFLOW"}
        >
          <Linechart
            ref={elem => (this.lineChart = elem)}
            id={"1"}
            height={140}
            width={500}
          />
        </Panel>
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
