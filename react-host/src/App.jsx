import React from "react";
import ReactDOM from "react-dom";
import AngularRemote1 from "./AngularRemote1";
import AngularRemote2 from "./AngularRemote2";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: react-host</div>
    <AngularRemote1></AngularRemote1>
    <AngularRemote2></AngularRemote2>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
