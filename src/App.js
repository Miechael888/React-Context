import logo from "./logo.svg";
import "./App.css";
import Card from "./component/Card";
import { useState } from "react";
import { mainContext } from "./context/MainContext";
import LayoutContextNewProvider from "./context/LayoutContextNew";
import MainContextClassProvider from "./context/MainContext";

function App() {
  return (
    <div className="App">
      <LayoutContextNewProvider>
        <MainContextClassProvider>
          <Card />
        </MainContextClassProvider>
      </LayoutContextNewProvider>
    </div>
  );
}

export default App;
