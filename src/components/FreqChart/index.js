import React, { Component } from "react";

import { addAmounts } from "../../utils/methods";

import {
  Container,
  MonthContainer,
  MonthInner,
  MonthLabel,
  MonthSquare
} from "./styles";

const MonthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const MONTHDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default class MonthFreq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatFreqData = () => {
    const { data } = this.props;

    let monthData = {};
    addAmounts(data).forEach(item => {
      const [year, month, day] = item.date.split("/");
      let singleMonth = parseInt(month, 10);
      if (monthData[singleMonth]) {
        monthData[singleMonth][day - 1] = item.transactions;
      } else {
        monthData[singleMonth] = [];
        monthData[singleMonth][day - 1] = item.transactions;
      }
    });
    Object.keys(monthData).forEach(key => {
      for (let i = 0; i < MONTHDAYS[key - 1]; i++) {
        if (!monthData[key][i]) {
          monthData[key][i] = 0;
        }
      }
    });
    return monthData;
  };
  getOpacity = amount => {
    if (amount >= 1 && amount < 3) {
      return 0.2;
    }
    if (amount >= 3 && amount < 5) {
      return 0.4;
    }
    if (amount >= 5 && amount < 7) {
      return 0.6;
    }
    if (amount >= 7 && amount < 9) {
      return 0.8;
    }
    if (amount >= 9) {
      return 1;
    }

    return 0.1;
  };

  renderEmptyBlocks = month => {
    let rend = [];
    for (let i = 0; i < MONTHDAYS[month]; i++) {
      rend.push(<MonthSquare opacity={this.getOpacity(0)} />);
    }
    return rend;
  };

  render() {
    return (
      <Container>
        {MonthsLong.map((monthName, index) => {
          if (!this.formatFreqData()[index + 1]) {
            return (
              <MonthContainer>
                <MonthLabel> {monthName}</MonthLabel>
                <MonthInner>{this.renderEmptyBlocks(index)}</MonthInner>
              </MonthContainer>
            );
          } else {
            return (
              <MonthContainer>
                <MonthLabel> {monthName}</MonthLabel>
                <MonthInner>
                  {this.formatFreqData()[index + 1].map(item => {
                    return <MonthSquare opacity={this.getOpacity(item)} />;
                  })}
                </MonthInner>
              </MonthContainer>
            );
          }
        })}
      </Container>
    );
  }
}
