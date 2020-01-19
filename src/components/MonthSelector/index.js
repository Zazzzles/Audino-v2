import React from "react";

//  Styles
import { Container, MonthItem, ActiveIndicator } from "./styles";

//  Helpers
import { MonthsLong } from "../../utils/config";

export default function MonthSelector({
  availableMonths,
  selectedMonth,
  onMonthSelect
}) {
  return (
    <Container>
      <MonthItem active={selectedMonth === 0} onClick={() => onMonthSelect(0)}>
        All
        <ActiveIndicator active={selectedMonth === 0} />
      </MonthItem>
      {availableMonths.map((month, index) => {
        return (
          <MonthItem
            key={index}
            onClick={() => onMonthSelect(month)}
            active={selectedMonth === month}
          >
            {MonthsLong[month - 1]}
            <ActiveIndicator active={selectedMonth === month} />
          </MonthItem>
        );
      })}
    </Container>
  );
}
