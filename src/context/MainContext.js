import React, { createContext } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const cardData = {
    name: "Miechael",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  };

  const mainContextValue = {
    cardData,
  };

  return <MainContext.Provider value={mainContextValue}>{props.children}</MainContext.Provider>;
};

export default MainContextProvider;
