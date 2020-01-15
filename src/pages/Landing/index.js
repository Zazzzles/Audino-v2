import React, { Component } from "react";

import {
  MainWrapper,
  LandingWrapper,
  InnerWrapper,
  LogoWrapper,
  Logo,
  TagLine,
  DropzoneWrapper,
  DropzoneTopbar,
  DropzoneTopbarHeadings,
  DropzoneHeading,
  DropzoneSubheading,
  BankImageContainer,
  BankImage
} from "./styles";

//  Assets
import BG from "../../assets/landing-bg2.png";
import LogoMain from "../../assets/logo.png";
import Fnb from "../../assets/fnb.png";
import Nedbank from "../../assets/nedbank.png";
//  Comps
import Dropzone from "../../components/Dropzone";
import Cards from "../../components/Cards";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      loadedFiles: []
    };
  }

  handleDrop = data => {
    this.setState({
      files: data
    });
  };

  render() {
    return (
      <MainWrapper image={BG}>
        <LandingWrapper>
          <InnerWrapper>
            <LogoWrapper>
              <Logo src={LogoMain} />
              <TagLine>Personal finance visualized</TagLine>
            </LogoWrapper>
            <DropzoneWrapper>
              <DropzoneTopbar>
                <DropzoneTopbarHeadings>
                  <DropzoneHeading>GET STARTED</DropzoneHeading>
                  <DropzoneSubheading>
                    Drag your .csv files into the dropzone below
                  </DropzoneSubheading>
                </DropzoneTopbarHeadings>
                <BankImageContainer>
                  <BankImage src={Fnb} />
                  <BankImage src={Nedbank} />
                </BankImageContainer>
              </DropzoneTopbar>
              <Dropzone handleDrop={this.handleDrop} />
            </DropzoneWrapper>
          </InnerWrapper>
        </LandingWrapper>
        <Cards />
      </MainWrapper>
    );
  }
}
