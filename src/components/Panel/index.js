import React from "react";

import { Container } from "./styles";

export default function Panel({ height, width, col, row }) {
  return (
    <Container height={height} width={width} col={col} row={row}></Container>
  );
}
