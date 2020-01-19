import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { MainWrapper, ContentWrapper } from "./styles";

//  Components
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
//  Sections
import TransactionSection from "../../components/Sections/Transactions";
import ReferenceSection from "../../components/Sections/References";
import CategorySection from "../../components/Sections/Categories";
//Utils
import { parseFiles } from "../../utils/parser";
import { getFiles } from "../../utils/persistence";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "transactions",
      files: [],
      workingFile: {}
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

  handleMonthSelect = month => {
    console.log(`${month} selected`);
  };

  handleFileSelect = file => {
    console.log(`${file} selected`);
  };

  render() {
    const { activeSection, files, workingFile } = this.state;
    return (
      <MainWrapper>
        <Sidebar onChange={this.handleSidebarChange} />
        {workingFile.transactions && (
          <ContentWrapper>
            <Topbar
              activeItem={activeSection}
              value={30}
              onBack={this.handleBack}
              onMonthSelect={this.handleMonthSelect}
              selectedMonth={11}
              availableMonths={[10, 11, 12]}
              onFileSelect={this.handleFileSelect}
            />

            {activeSection === "transactions" && (
              <TransactionSection transactions={workingFile.transactions} />
            )}
            {activeSection === "references" && <ReferenceSection />}
            {activeSection === "categories" && <CategorySection />}
          </ContentWrapper>
        )}
      </MainWrapper>
    );
  }
}

export default withRouter(Dash);
