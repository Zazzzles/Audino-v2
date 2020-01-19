import React from "react";

import { Container, TableRow, RowItem } from "./styles";

export default function Table({ data }) {
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <TableRow key={index} light={index % 2}>
            <RowItem width={"21%"} opacity={0.5} weight={100}>
              {item.date}
            </RowItem>
            <RowItem width={"65%"} opacity={1} weight={400}>
              {item.ref}
            </RowItem>
            <RowItem width={"14%"} align={"right"} opacity={1} weight={900}>
              {item.amount}
            </RowItem>
          </TableRow>
        );
      })}
    </Container>
  );
}
