import React, { Component } from "react";

import { Container } from "./styles";

import Placeholder from "../../Placeholder";

export default class Recurring extends Component {
  state = {};

  render() {
    console.log(this.props.recurringTransactions);
    console.log(this.props.debitOrders);
    return (
      <Container>
        <Placeholder />
      </Container>
    );
  }
}
