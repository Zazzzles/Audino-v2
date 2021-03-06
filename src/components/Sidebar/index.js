import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import {
  Container,
  LogoImage,
  LogoContainer,
  NavItemContainer,
  ActiveNavIndicator,
  ActiveNavIndicatorPlaceholder,
  NavItemLabel,
  NavItemIcon
} from "./styles";

//  Assets
import Logo from "../../assets/logo.png";
import TransactionsGrad from "../../assets/icons/transactions_grad.png";
import TransactionsWhite from "../../assets/icons/transactions_white.png";
import ReferencesGrad from "../../assets/icons/references_grad.png";
import ReferencesWhite from "../../assets/icons/references_white.png";
import CategoriesGrad from "../../assets/icons/categories_grad.png";
import CategoriesWhite from "../../assets/icons/categories_white.png";

const NavItem = ({
  iconActive,
  iconInactive,
  label,
  active,
  setActive,
  hasBottomBorder
}) => {
  return (
    <NavItemContainer
      active={active}
      onClick={setActive}
      hasBottomBorder={hasBottomBorder}
    >
      <ActiveNavIndicator active={active} />
      <ActiveNavIndicatorPlaceholder active={active} />
      <NavItemIcon active={active} src={active ? iconActive : iconInactive} />
      <NavItemLabel active={active}>{label}</NavItemLabel>
    </NavItemContainer>
  );
};

export default function Sidebar({ onChange }) {
  const [activeItem, setActiveItem] = useState("transactions");
  return (
    <Container>
      <Fade>
        <LogoContainer>
          <LogoImage src={Logo} />
        </LogoContainer>
      </Fade>
      <Fade duration={2000}>
        <NavItem
          label={"Transactions"}
          active={activeItem === "transactions"}
          setActive={() => {
            onChange("transactions");
            setActiveItem("transactions");
          }}
          iconActive={TransactionsGrad}
          iconInactive={TransactionsWhite}
        />
      </Fade>
      <Fade duration={2500}>
        <NavItem
          label={"Recurring"}
          active={activeItem === "recurring"}
          setActive={() => {
            onChange("recurring");
            setActiveItem("recurring");
          }}
          iconActive={ReferencesGrad}
          iconInactive={ReferencesWhite}
        />
      </Fade>
      <Fade duration={3000}>
        <NavItem
          label={"Categories"}
          active={activeItem === "categories"}
          setActive={() => {
            onChange("categories");
            setActiveItem("categories");
          }}
          iconActive={CategoriesGrad}
          iconInactive={CategoriesWhite}
          hasBottomBorder
        />
      </Fade>
    </Container>
  );
}
