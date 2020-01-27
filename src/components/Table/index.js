import React, { Component } from "react";

import {
  Wrapper,
  Container,
  TableRow,
  RowItem,
  MonthName,
  TransactionCount,
  YearName,
  MonthContainer,
  MonthIndicator
} from "./styles";

import { MonthsLong } from "../../utils/config";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeader: "heading0",
      headers: {}
    };
  }

  componentWillMount = () => {
    this.getAvailableHeaders();
  };

  componentWillReceiveProps = () => {
    this.getAvailableHeaders();
  };

  getAvailableHeaders = () => {
    const { data } = this.props;
    let availableHeaders = {};
    Object.keys(data).forEach((key, index) => {
      availableHeaders[`heading${index}`] = {
        name: MonthsLong[key - 1],
        transactions: data[key].length,
        year: data[key][0].date.split("/")[0]
      };
    });
    this.setState({
      availableHeaders
    });
  };

  handleScroll = () => {
    const { data } = this.props;
    Object.keys(data).forEach((key, index) => {
      let elem = this[`heading${index}`];
      let topOffset = elem.getBoundingClientRect().top;
      let height = elem.getBoundingClientRect().height;
      if (topOffset <= 257 && topOffset > 0 - height) {
        this.setState({
          currentHeader: `heading${index}`
        });
      }
    });
  };

  renderData = () => {
    const { data } = this.props;
    let toRender = [];
    Object.keys(data).forEach((key, index) => {
      toRender.push(
        <MonthContainer
          ref={elem => (this[`heading${index}`] = elem)}
          key={index}
        >
          {index !== 0 && (
            <MonthIndicator>
              <MonthName> {MonthsLong[key - 1]}</MonthName>
              <TransactionCount>
                {data[key].length} transactions
              </TransactionCount>
              <YearName> {data[key][0].date.split("/")[0]}</YearName>
            </MonthIndicator>
          )}
          {data[key].map((item, index2) => {
            return (
              <TableRow key={index2} light={index2 % 2}>
                <RowItem width={"21%"} opacity={0.5}>
                  {item.date}
                </RowItem>
                <RowItem width={"65%"} opacity={1}>
                  {item.ref}
                </RowItem>
                <RowItem width={"14%"} align={"right"} opacity={1}>
                  {item.amount}
                </RowItem>
              </TableRow>
            );
          })}
        </MonthContainer>
      );
    });
    return toRender;
  };
  render() {
    const { availableHeaders, currentHeader } = this.state;
    const { height = 400 } = this.props;
    return (
      <Wrapper>
        <MonthIndicator>
          <MonthName> {availableHeaders[currentHeader].name}</MonthName>
          <TransactionCount>
            {availableHeaders[currentHeader].transactions} transactions
          </TransactionCount>
          <YearName> {availableHeaders[currentHeader].year}</YearName>
        </MonthIndicator>
        <Container height={height} onScroll={this.handleScroll}>
          {this.renderData()}
        </Container>
      </Wrapper>
    );
  }
}
