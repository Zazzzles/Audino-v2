import styled from "styled-components";
import { Colors, Layout } from "../../utils/config";
export const Container = styled.div`
  height: 180px;
  width: 100%;
  border: 2px dashed ${Colors.grey1};
  background-color: ${props => (props.droppable ? "#ffffff36;" : "transparent")}
  border-radius: 20px;
  ${Layout.center}
  flex-direction: column;
  transition: all 0.3s;
  overflow: hidden;
  @media (max-width: 1000px) {
    display: none;
  }
  &:hover{
    background-color: #0000001c;
  }
`;

export const FileUpload = styled.input`
  display: none;
`;

export const FileUploadLabel = styled.label`
  position: absolute;
  height: 180px;
  width: 600px;
  cursor: pointer;
`;

export const Label = styled.span`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

export const FileLabel = styled.span`
  color: white;
  font-weight: 500;
  font-size: 17px;
`;

export const DroppedFilesContainer = styled.div`
  ${Layout.centerColumn}
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
