import React, { Component, createContext } from "react";
export const MainContextClass = createContext();

class MainContextClassProvider extends Component {
  state = {
    cardData: {
      name: "Miechael",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
  };

  render() {
    const mainContextValue = {
      cardData: this.state.cardData,
    };
    return <MainContextClass.Provider value={mainContextValue}>{this.props.children}</MainContextClass.Provider>;
  }
}

export default MainContextClassProvider;
