import React, { createContext, useState } from "react";

export const LayoutContextNew = createContext();

const LayoutContextNewProvider = (props) => {
  const [state, setState] = useState({
    nightmode: false,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#ffff",
      background: "#000",
    },
  });
  const handleToggle = () => {
    setState({ ...state, nightmode: !state.nightmode });
  };
  console.log("state", state);

  return <LayoutContextNew.Provider value={{ ...state, handleTogle: handleToggle }}>{props.children}</LayoutContextNew.Provider>;
};

export default LayoutContextNewProvider;
