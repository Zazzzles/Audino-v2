import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { Container } from "./styles";

//  Components
import Panel from "../../Panel";

export default class Transactions extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Panel height={2} width={1} row={1} col={1} />
        <Panel height={1} width={2} row={1} col={2} />
        <Panel height={1} width={2} row={2} col={2} />
      </Container>
    );
  }
}
