import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ForwardCounter from "./components/ForwardCounter";
import BackWardCounter from "./components/BackwardCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackWardCounter />
    </React.Fragment>
  );
}

export default App;
