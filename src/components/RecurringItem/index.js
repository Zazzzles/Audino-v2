import React from "react";

import Panel from "../Panel";

import {
  Container,
  PanelTopbar,
  IconContainer,
  Icon,
  PanelTitle
} from "./styles";

import ReccIcon from "../../assets/icons/recurring_item_grad.png";

export default function RecurringItem({ children }) {
  return (
    <Container>
      <PanelTopbar>
        <IconContainer>
          <Icon src={ReccIcon} />
        </IconContainer>
        <PanelTitle>Checkers</PanelTitle>
      </PanelTopbar>
      {children}
    </Container>
  );
}
