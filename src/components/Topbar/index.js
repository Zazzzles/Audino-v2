import React from "react";
import Fade from "react-reveal/Fade";

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

export default function Topbar({ activeItem, value, onBack }) {
  return (
    <Fade top>
      <Container>
        <TitleGroup>
          <Fade duration={2000}>
            <BackArrowImg src={BackArrow} onClick={onBack} />
          </Fade>

          <TitleContainer>
            <Fade duration={2000}>
              <PageTitle>{renderTitles(activeItem, value).title}</PageTitle>
            </Fade>

            <Fade duration={2500}>
              <PageSubtitle>
                {renderTitles(activeItem, value).subtitle}
              </PageSubtitle>
            </Fade>
          </TitleContainer>
        </TitleGroup>

        <Dropdown
          items={["savings.csv", "cheque.csv", "nedbank-example.csv"]}
          onItemSelect={item => {
            console.log(item);
          }}
        />
      </Container>
    </Fade>
  );
}
