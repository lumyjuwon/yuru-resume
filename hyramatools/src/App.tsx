import React from "react";
import Test from "./image/dehaze.svg";
import Test2 from "./image/json.svg";
import styled from "styled-components";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import { SideMenuButton, IconButton } from "component";
import { JsonEditor, JavascriptEditor } from "screen";

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
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <IconButton src={Test} />
        </Header>
        <ContentContainer>
          <LeftSide>
            <Link to="/json_editor">
              <SideMenuButton src={Test2} title={"JsonEditor"} />
            </Link>
            <Link to="/javascript_editor">
              <SideMenuButton src={Test} title={"JavascriptEditor"} />
            </Link>
          </LeftSide>
          <Screen>
            <ScreenContainer>
              <Switch>
                <Route path="/json_editor" component={JsonEditor} />
              </Switch>
              <Switch>
                <Route path="/javascript_editor" component={JavascriptEditor} />
              </Switch>
            </ScreenContainer>
          </Screen>
        </ContentContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
