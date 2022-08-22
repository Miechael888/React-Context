import React, { useContext } from "react";
import { LayoutContextNew } from "../context/LayoutContextNew";
import { MainContext } from "../context/MainContext";

const CardName = () => {
  const context = useContext(MainContext);
  const state = useContext(LayoutContextNew);

  const { nightmode, day, night } = state;

  const mood = nightmode ? night : day;

  return (
    <div>
      <h1 style={{ color: mood.color }}>{context.data.name}</h1>
    </div>
  );
};

export default CardName;
