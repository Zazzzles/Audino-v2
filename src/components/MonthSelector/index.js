import React, { useState } from "react";

//  Styles
import { Container, MonthItem, ActiveIndicator } from "./styles";

//  Helpers
import { MonthsLong } from "../../utils/config";

export default function MonthSelector({
  availableMonths,
  selectedMonth,
  onMonthSelect
}) {
  const [activeMonth, setActiveMonth] = useState(selectedMonth);
  return (
    <Container>
      <MonthItem
        active={activeMonth === 0}
        onClick={() => {
          onMonthSelect(0);
          setActiveMonth(0);
        }}
      >
        All
        <ActiveIndicator active={activeMonth === 0} />
      </MonthItem>
      {availableMonths.map((month, index) => {
        return (
          <MonthItem
            key={index}
            onClick={() => {
              onMonthSelect(month);
              setActiveMonth(month);
            }}
            active={activeMonth === month}
          >
            {MonthsLong[month - 1]}
            <ActiveIndicator active={activeMonth === month} />
          </MonthItem>
        );
      })}
    </Container>
  );
}
