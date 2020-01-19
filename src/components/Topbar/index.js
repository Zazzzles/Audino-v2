import React from "react";

import {
  Container,
  TitleContainer,
  PageTitle,
  PageSubtitle,
  BackArrowImg,
  TitleGroup
} from "./styles";

//  Assets
import BackArrow from "../../assets/icons/backarrow.png";

//  Components
import Dropdown from "../Dropdown";
import MonthSelector from "../MonthSelector";

const renderTitles = (activeItem, value) => {
  if (activeItem === "transactions") {
    return {
      title: "TRANSACTIONS",
      subtitle: `${value} total transactions`
    };
  }
  if (activeItem === "references") {
    return {
      title: "REFERENCES",
      subtitle: `${value} total references`
    };
  }
  if (activeItem === "categories") {
    return {
      title: "CATEGORIES",
      subtitle: `${value} total categories`
    };
  }
};

export default function Topbar({
  activeItem,
  value,
  onBack,
  onMonthSelect,
  selectedMonth,
  availableMonths,
  onFileSelect
}) {
  return (
    <Container>
      <TitleGroup>
        <BackArrowImg src={BackArrow} onClick={onBack} />

        <TitleContainer>
          <PageTitle>{renderTitles(activeItem, value).title}</PageTitle>

          <PageSubtitle>
            {renderTitles(activeItem, value).subtitle}
          </PageSubtitle>
        </TitleContainer>
      </TitleGroup>
      <MonthSelector
        availableMonths={availableMonths}
        selectedMonth={selectedMonth}
        onMonthSelect={onMonthSelect}
      />
      <Dropdown
        items={["savings.csv", "cheque.csv", "nedbank-example.csv"]}
        onItemSelect={onFileSelect}
      />
    </Container>
  );
}
