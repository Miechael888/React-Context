import React, { useContext } from "react";
import { LayoutContextNew } from "../context/LayoutContextNew";

const Togle = () => {
  const state = useContext(LayoutContextNew);

  const { nightmode, handleTogle } = state;

  return (
    <div>
      <button onClick={handleTogle}>change to {nightmode ? "day" : "night"} mode</button>
    </div>
  );
};

export default Togle;
