import React from "react";

import Fade from "react-reveal/Fade";

import {
  Container,
  InnerWrapper,
  Card,
  TextWrapper,
  IconWrapper,
  Icon,
  CardHeading,
  CardBody,
  AboutContainer,
  CardContainer,
  AboutHeading,
  AboutText,
  ScrollButton
} from "./styles";

//  Assets
import Visual from "../../assets/icons/visual_grad.png";
import Fast from "../../assets/icons/fast_grad.png";
import Secure from "../../assets/icons/secure_grad.png";

const CardElem = ({ icon, heading, text }) => {
  return (
    <Card>
      <IconWrapper>
        <Icon src={icon} />
      </IconWrapper>
      <TextWrapper>
        <CardHeading>{heading}</CardHeading>
        <CardBody>{text}</CardBody>
      </TextWrapper>
    </Card>
  );
};

export default function Cards() {
  return (
    <Container>
      <InnerWrapper>
        <AboutContainer>
          <Fade>
            <AboutHeading>AUDINO EXPLAINED</AboutHeading>
          </Fade>
          <Fade>
            <AboutText>
              Audino is an online personal finance visualization solution
              designed to help you get on top of your finances.
              <br />
              <br />
              By giving you a top-level breakdown of your spending habits as
              well as an insight as to where your money is going, Audino is a
              powerful tool for anyone who knows how to download a bank
              statement.
            </AboutText>
          </Fade>
          <Fade>
            <ScrollButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              GET STARTED
            </ScrollButton>
          </Fade>
        </AboutContainer>
        <CardContainer>
          <Fade bottom>
            <Fade>
              <CardElem
                icon={Secure}
                heading={"SECURE"}
                text={"Your financial data will never leave your computer."}
              />
            </Fade>
          </Fade>
          <Fade bottom>
            <Fade>
              <CardElem
                icon={Fast}
                heading={"FAST"}
                text={
                  "All processing is done locally which allows for ligtning-fast file handling."
                }
              />
            </Fade>
          </Fade>
          <Fade bottom>
            <Fade>
              <CardElem
                icon={Visual}
                heading={"VISUAL"}
                text={
                  "All financial data is presented in a easily digestable way by means of charts and tables."
                }
              />
            </Fade>
          </Fade>
        </CardContainer>
      </InnerWrapper>
    </Container>
  );
}
