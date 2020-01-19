import React, { useState } from "react";

import {
  Wrapper,
  Container,
  CaratContainer,
  SelectedLabel,
  DropdownPanel,
  DropdownItem,
  DropdownIcon
} from "./styles";

import CaratIcon from "../../assets/icons/carat.png";
import CsvIcon from "../../assets/icons/csvIcon.png";

export default function Dropdown({ items, onItemSelect }) {
  const [activeItem, onSelect] = useState(items[0].name);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <CaratContainer isOpen={isOpen} src={CaratIcon} />
        <SelectedLabel> {activeItem}</SelectedLabel>
      </Container>
      <DropdownPanel height={items.length * 50} isOpen={isOpen}>
        {items.map((item, index) => {
          return (
            <DropdownItem
              key={index}
              last={index === items.length - 1}
              onClick={() => {
                onItemSelect(item.name);
                onSelect(item.name);
                setIsOpen(false);
              }}
            >
              <DropdownIcon src={CsvIcon} />
              {item.name}
            </DropdownItem>
          );
        })}
      </DropdownPanel>
    </Wrapper>
  );
}
