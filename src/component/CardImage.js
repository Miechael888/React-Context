import React, { useContext } from "react";
import { LayoutContextNew } from "../context/LayoutContextNew";
import { MainContext } from "../context/MainContext";

const CardImage = () => {
  const context = useContext(MainContext);
  const state = useContext(LayoutContextNew);

  const { nightmode, day, night } = state;

  const mood = nightmode ? night : day;

  return (
    <div>
      <img src={context.data.avatar} />
    </div>
  );
};

export default CardImage;
