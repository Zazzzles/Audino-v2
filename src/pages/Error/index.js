import React from "react";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

import {
  Container,
  Panel,
  ErrorText,
  ErrorSubText,
  IconContainer,
  Icon,
  Button
} from "./styles";

import BG from "../../assets/landing-bg.png";
import IconImage from "../../assets/icons/oops_icon.png";

function Error({ history }) {
  return (
    <Container image={BG}>
      <Fade bottom>
        <Panel>
          <IconContainer>
            <Icon src={IconImage} />
          </IconContainer>
          <ErrorText>Oops!</ErrorText>
          <ErrorSubText>There was an error processing your file</ErrorSubText>
          <Button
            onClick={() => {
              history.push({
                pathname: "/"
              });
            }}
          >
            BACK
          </Button>
        </Panel>
      </Fade>
    </Container>
  );
}

export default withRouter(Error);
