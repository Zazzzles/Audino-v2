import React, { Component } from "react";

import { Container } from "./styles";

import Placeholder from "../../Placeholder";

import { getDebitOrders } from "../../../utils/methods";

import RecurringItem from "../../RecurringItem";

export default class Recurring extends Component {
  state = {};

  render() {
    console.log(getDebitOrders(this.props.transactions));
    return (
      <Container>
        <RecurringItem />
      </Container>
    );
  }
}
