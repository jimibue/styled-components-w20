import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header, Segment } from "semantic-ui-react";
import HeaderText from "./styled/HeaderText";
import Github from "./Github";

function App() {
  return (
    <AppContainer>
      <Segment as={Transparent}>
        <HeaderText fSize={"large"}>My Portfolio</HeaderText>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText>My Projects</HeaderText>
        <Github />
      </Segment>
      <Segment as={Transparent}>
        <HeaderText fSize={"small"}>About</HeaderText>
      </Segment>
    </AppContainer>
  );
}

// const HeaderText = styled.h1`
//   font-size: ${(props) => (props.large ? "4rem" : "2rem")} !important;
//   color: white !important;
//   text-align: center;
// `;

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, white, black);
  min-height: 100vh;
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default App;
