import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { MainWrapper, ContentWrapper } from "./styles";

//  Components
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
//  Sections
import TransactionSection from "../../components/Sections/Transactions";
import ReferenceSection from "../../components/Sections/References";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "transactions"
    };
  }

  handleSidebarChange = navItem => {
    this.setState({ activeSection: navItem });
  };

  renderTopbarTitle = (activeItem, value) => {
    if (activeItem === "transactions") {
      return {
        title: "Transactions",
        subtitle: `${value} total transactions`
      };
    }
    if (activeItem === "references") {
      return {
        title: "References",
        subtitle: `${value} total references`
      };
    }
  };

  handleBack = () => {
    const { history } = this.props;
    history.push({
      pathname: "/"
    });
  };

  render() {
    const { activeSection } = this.state;
    return (
      <MainWrapper>
        <Sidebar onChange={this.handleSidebarChange} />
        <ContentWrapper>
          <Topbar
            {...this.renderTopbarTitle(activeSection, 30)}
            onBack={this.handleBack}
          />
          {activeSection === "transactions" && <TransactionSection />}
          {activeSection === "references" && <ReferenceSection />}
        </ContentWrapper>
      </MainWrapper>
    );
  }
}

export default withRouter(Dash);
