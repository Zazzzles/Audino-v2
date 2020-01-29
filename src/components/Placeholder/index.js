import React from "react";
import Fade from "react-reveal/Fade";

import { Container, Text, Image } from "./styles";

import UnderConstruction from "../../assets/uc.svg";

export default function Placeholder() {
  return (
    <Container>
      <Fade>
        <Image src={UnderConstruction} />
      </Fade>
      <Fade bottom>
        <Text>This section is coming soon!</Text>
      </Fade>
    </Container>
  );
}
