import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import {
  MainWrapper,
  LandingWrapper,
  InnerWrapper,
  LogoWrapper,
  Logo,
  TagLine,
  DropzoneContainer,
  DropzoneTopbar,
  DropzoneTopbarHeadings,
  DropzoneHeading,
  DropzoneSubheading,
  BankImageContainer,
  BankImage,
  Button,
  ButtonPlaceholder,
  DropzoneWrapper,
  ButtonWrapper,
  LoadedFilesMessage
} from "./styles";

//  Helpers
import { getFiles } from "../../utils/persistence";

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

  async componentDidMount() {
    let files = await getFiles();
    if (files && files.length !== 0) {
      this.setState({ loadedFiles: files });
    }
  }

  handleDrop = data => {
    this.setState({
      files: data
    });
  };

  handleContinue = () => {
    console.log("Navigate to dash");
  };

  render() {
    const { files, loadedFiles } = this.state;
    return (
      <MainWrapper image={BG}>
        <LandingWrapper>
          <InnerWrapper>
            <Fade>
              <LogoWrapper>
                <Logo src={LogoMain} />
                <TagLine>Personal finance visualized</TagLine>
              </LogoWrapper>
            </Fade>

            <Fade right>
              <DropzoneWrapper>
                <DropzoneContainer>
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
                </DropzoneContainer>
                <ButtonWrapper>
                  {files.length !== 0 || loadedFiles.length !== 0 ? (
                    <Fade>
                      <Fade bottom>
                        <Button onClick={this.handleContinue}>CONTINUE</Button>
                      </Fade>
                    </Fade>
                  ) : (
                    <ButtonPlaceholder />
                  )}
                  {loadedFiles.length !== 0 && (
                    <Fade>
                      <Fade bottom>
                        <LoadedFilesMessage>
                          You have {loadedFiles.length}{" "}
                          {loadedFiles.length > 1 ? " files" : " file"} loaded.{" "}
                          Continue with loaded files or upload new ones.
                        </LoadedFilesMessage>
                      </Fade>
                    </Fade>
                  )}
                </ButtonWrapper>
              </DropzoneWrapper>
            </Fade>
          </InnerWrapper>
        </LandingWrapper>
        <Cards />
      </MainWrapper>
    );
  }
}
