import React from "react";
import Test from "./image/dehaze.svg";
import "./App.css";

import { SideMenuButton, IconButton } from "component";

function App() {
  return (
    <div className="App">
      <div id="header">
        <IconButton src={Test} />
      </div>
      <div className="container">
        <div id="left-side">
          <div className="left-container">
            <SideMenuButton src={Test} title={"JSON"} />
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}

export default App;
