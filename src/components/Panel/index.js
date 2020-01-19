import React from "react";

import {
  Container,
  PanelTopbar,
  IconContainer,
  Icon,
  PanelTitle
} from "./styles";

export default function Panel({
  height,
  width,
  col,
  row,
  children,
  icon,
  title
}) {
  return (
    <Container height={height} width={width} col={col} row={row}>
      <PanelTopbar>
        <IconContainer>
          <Icon src={icon} />
        </IconContainer>
        <PanelTitle>{title}</PanelTitle>
      </PanelTopbar>
      {children}
    </Container>
  );
}
