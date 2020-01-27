import styled from "styled-components";

import { Colors, Layout } from "../../utils/config";

export const Wrapper = styled.div`
  ${Layout.centerColumn}
`;
export const Container = styled.div`
  background-color: #161f29;
  height: 50px;
  width: 260px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${props => (props.isOpen ? Colors.blend : "transparent")};
`;

export const CaratContainer = styled.img`
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s ease-in-out;
  height: 30px;
`;
export const SelectedLabel = styled.div`
  color: white;
`;

export const DropdownItem = styled.div`
  width: 260px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
  box-sizing: border-box;
  padding-left: 15px;
  cursor: pointer;
  border-bottom: 1px solid
    ${props => (props.last ? "transparent" : Colors.grey0)};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const DropdownIcon = styled.img`
  height: 20px;
  margin-right: 10px;
`;

export const DropdownPanel = styled.div`
  overflow: hidden;
  position: absolute;
  margin-top: 65px;
  width: 260px;
  transition: all 0.3s;
  z-index: 999;
  height: ${props => (props.isOpen ? props.height : 0)}px;
  background-color: ${props => (props.isOpen ? "#161f29" : "transparent")};
  border-radius: 15px;
  border: 1px solid ${props => (props.isOpen ? Colors.blend : "transparent")};
`;
