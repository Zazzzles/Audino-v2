import React, { Component } from "react";

import {
  Container,
  Label,
  FileLabel,
  FileUpload,
  FileUploadLabel,
  Icon,
  DroppedFilesContainer
} from "./styles";

//  Assets
import DropFilesIcon from "../../assets/icons/csv_grad.png";
import DropFilesIconDone from "../../assets/icons/filesdone_grad.png";

export default class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragOver: false,
      droppedFiles: []
    };
    this.dropRef = React.createRef();
  }

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({
        dragOver: true
      });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragOver: false
    });
  };

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragOver: false
    });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      let files = Array.from(e.dataTransfer.files);
      this.props.handleDrop(files);
      this.setState({
        droppedFiles: files
      });
      e.dataTransfer.clearData();
    }
  };

  handleManualUpload = e => {
    let files = Array.from(e.target.files);
    this.props.handleDrop(files);
    this.setState({
      droppedFiles: files
    });
  };

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  render() {
    const { dragOver, droppedFiles } = this.state;
    return (
      <>
        <Container ref={this.dropRef} droppable={dragOver}>
          <FileUploadLabel>
            <FileUpload
              type={"file"}
              multiple
              onChange={this.handleManualUpload}
            />
          </FileUploadLabel>

          {droppedFiles.length === 0 ? (
            <Label>
              <Icon src={DropFilesIcon} />
            </Label>
          ) : (
            <DroppedFilesContainer>
              <Icon src={DropFilesIconDone} />
              {droppedFiles.map((file, index) => {
                return <FileLabel key={index}>{file.name}</FileLabel>;
              })}
            </DroppedFilesContainer>
          )}
        </Container>
      </>
    );
  }
}
