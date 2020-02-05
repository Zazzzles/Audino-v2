import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

import Example from "../../assets/example.csv";

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
  LoadedFilesMessage,
  DownArrowIcon,
  ButtonLink
} from "./styles";

//  Helpers
import { getFiles } from "../../utils/persistence";

//  Assets
import BG from "../../assets/landing-bg.png";
import LogoMain from "../../assets/logo.png";
import Fnb from "../../assets/fnb.png";
import Nedbank from "../../assets/nedbank.png";
import Absa from "../../assets/absa.png";
import DownArrow from "../../assets/icons/down_arrow.png";
//  Comps
import Dropzone from "../../components/Dropzone";
import Cards from "../../components/Cards";
class Landing extends Component {
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
    const { history } = this.props;
    const { files, loadedFiles } = this.state;
    if (files.length === 0) {
      history.push({
        pathname: "/dash",
        loadedFiles
      });
    } else {
      history.push({
        pathname: "/dash",
        files
      });
    }
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
                <TagLine>
                  Personal finance visualized <br /> <br /> v
                  {process.env.REACT_APP_VERSION}
                </TagLine>
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
                      <BankImage src={Absa} />
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

                  {files.length === 0 && loadedFiles.length === 0 && (
                    <Fade>
                      <Fade bottom>
                        <LoadedFilesMessage>
                          Don't have any statements? That's ok!
                        </LoadedFilesMessage>
                      </Fade>
                    </Fade>
                  )}

                  {files.length === 0 && loadedFiles.length === 0 && (
                    <Fade>
                      <Fade bottom>
                        <ButtonLink href={Example} download>
                          LOAD AN EXAMPLE
                        </ButtonLink>
                      </Fade>
                    </Fade>
                  )}
                </ButtonWrapper>
              </DropzoneWrapper>
            </Fade>
          </InnerWrapper>
          <DownArrowIcon src={DownArrow} />
        </LandingWrapper>
        <Cards />
      </MainWrapper>
    );
  }
}

export default withRouter(Landing);
