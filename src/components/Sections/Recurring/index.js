import React, { Component } from "react";

import { Container } from "./styles";

import Placeholder from "../../Placeholder";

import {
  getDebitOrders,
  getRecurringTransactions
} from "../../../utils/methods";

export default class Recurring extends Component {
  state = {};

  render() {
    // console.log("recurring");
    // console.log(getRecurringTransactions(this.props.transactions));
    // console.log("debit");
    //console.log(getDebitOrders(this.props.transactions));
    let orders = getDebitOrders(this.props.transactions);
    return (
      <Container>
        <Placeholder />
      </Container>
    );
  }
}
