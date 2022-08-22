import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import Togle from "./Togle";
import { useContext } from "react";
import { LayoutContextNew } from "../context/LayoutContextNew";

const Card = () => {
  const state = useContext(LayoutContextNew);

  const { nightmode, day, night } = state;

  console.log(state);

  const mood = nightmode ? night : day;

  return (
    <div style={{ backgroundColor: mood.background }}>
      <CardName />
      <CardImage />
      <Togle />
    </div>
  );
};

export default Card;
