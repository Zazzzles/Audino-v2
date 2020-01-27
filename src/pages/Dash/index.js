import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { MainWrapper, ContentWrapper } from "./styles";

//  Components
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
//  Sections
import TransactionSection from "../../components/Sections/Transactions";
import RecurringSection from "../../components/Sections/Recurring";
import CategorySection from "../../components/Sections/Categories";
//Utils
import { parseFiles } from "../../utils/parser";
import { getFiles } from "../../utils/persistence";
import {
  getMonths,
  getDebitOrders,
  getRecurringTransactions
} from "../../utils/methods";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "transactions",
      files: [],
      workingFile: {},
      selectedMonth: 0
    };
  }

  componentDidMount = async () => {
    const { location } = this.props;
    const { files } = location;
    let data = [];
    if (!files) {
      data = getFiles();
    } else {
      data = await parseFiles(files);
    }
    this.setState({ files: data, workingFile: data[0] });
  };

  handleSidebarChange = activeSection => this.setState({ activeSection });

  handleBack = () =>
    this.props.history.push({
      pathname: "/"
    });

  handleMonthSelect = selectedMonth => {
    this.setState(
      {
        selectedMonth
      },
      () =>
        this.setState({
          selectedMonth
        })
    );
  };

  handleFileSelect = file => {
    const { files } = this.state;
    const workingFile = files.filter(f => f.name === file)[0];
    this.setState({ workingFile, selectedMonth: 0 }, () =>
      this.setState({ workingFile, selectedMonth: 0 })
    );
  };

  render() {
    const { activeSection, files, workingFile, selectedMonth } = this.state;
    return (
      <MainWrapper>
        <Sidebar onChange={this.handleSidebarChange} />
        {workingFile.transactions && (
          <ContentWrapper>
            <Topbar
              activeItem={activeSection}
              value={workingFile.transactions.length}
              onBack={this.handleBack}
              onMonthSelect={this.handleMonthSelect}
              selectedMonth={selectedMonth}
              availableMonths={getMonths(workingFile.transactions)}
              onFileSelect={this.handleFileSelect}
              availableFiles={files}
            />

            {activeSection === "transactions" && (
              <TransactionSection
                transactions={workingFile.transactions}
                selectedMonth={selectedMonth}
              />
            )}
            {activeSection === "recurring" && (
              <RecurringSection
                recurringTransactions={getRecurringTransactions(
                  workingFile.transactions
                )}
                debitOrders={getDebitOrders(workingFile.transactions)}
              />
            )}
            {activeSection === "categories" && <CategorySection />}
          </ContentWrapper>
        )}
      </MainWrapper>
    );
  }
}

export default withRouter(Dash);
