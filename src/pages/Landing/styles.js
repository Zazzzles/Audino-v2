import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
