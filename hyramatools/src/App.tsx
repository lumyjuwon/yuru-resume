import React from "react";
import Test from "./image/dehaze.svg";
import Test2 from "./image/json.svg";
import styled from "styled-components";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import { SideMenuButton, IconButton } from "component";
import { JsonFormatter } from "./screen/inedx";
import { JsonNode } from "./utils/json/jsonNode";
import { JsonBeautify } from "./utils/json/jsonUtils";

const Container = styled.div({
  paddingLeft: 16,
});

const Header = styled.div({
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: 56,
  alignItems: "center",
  zIndex: 1000,
  backgroundColor: "white",
});

const ContentContainer = styled.div({
  height: "100vh",
  display: "flex",
  paddingTop: 56,
  flexDirection: "row",
  backgroundColor: "white",
});

const LeftSide = styled.div({
  flexDirection: "column",
  display: "flex",
  position: "fixed",
  width: 72,
  height: "100%",
  left: 0,
  backgroundColor: "white",
});

const Screen = styled.div({
  display: "flex",
  width: "100%",
  marginLeft: 56,
  backgroundColor: "gray",
});

const ScreenContainer = styled.div({
  width: "100%",
  height: "100%",
});

function App() {
  console.log("render");
  // const json = {
  //   A: "D",
  //   B: "F",
  //   C: { D: "G" },
  //   Q: { 1: "A", 2: "B" },
  //   F: { 1: { 2: { 3: { 4: "GOOD" } } } },
  //   R: [{ S: "A" }, { D: "F" }, 1, { D: "F" }],
  //   E: [{ D: "W" }, { E: { A: { Q: [{ D: "A" }] } } }, 30, "S"],
  // };

  // const node: JsonNode = new JsonNode("root", json);
  // JsonBeautify(node, 8);

  return (
    <BrowserRouter>
      <Container>
        <Header>
          <IconButton src={Test} />
        </Header>
        <ContentContainer>
          <LeftSide>
            <Link to="/jsonformatter">
              <SideMenuButton src={Test2} title={"Formatter"} />
            </Link>
            <Link to="/jsonformatter">
              <SideMenuButton src={Test} title={"Formatter"} />
            </Link>
          </LeftSide>
          <Screen>
            <ScreenContainer>
              <Switch>
                <Route path="/jsonformatter" component={JsonFormatter} />
              </Switch>
            </ScreenContainer>
          </Screen>
        </ContentContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
