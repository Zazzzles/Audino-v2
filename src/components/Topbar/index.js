import React from "react";
import Fade from "react-reveal/Fade";

import {
  Container,
  TitleContainer,
  PageTitle,
  PageSubtitle,
  BackArrowImg
} from "./styles";

import BackArrow from "../../assets/icons/backarrow.png";

export default function Topbar({ title, subtitle, onBack }) {
  return (
    <Fade top>
      <Container>
        <Fade duration={2000}>
          <BackArrowImg src={BackArrow} onClick={onBack} />
        </Fade>

        <TitleContainer>
          <Fade duration={2000}>
            <PageTitle>{title}</PageTitle>
          </Fade>

          <Fade duration={2500}>
            <PageSubtitle>{subtitle}</PageSubtitle>
          </Fade>
        </TitleContainer>
      </Container>
    </Fade>
  );
}
