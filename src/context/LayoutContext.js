import React, { Component, createContext } from "react";

export const LayoutContext = createContext();

class LayoutContextProvider extends Component {
  state = {
    nightmode: false,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#ffff",
      background: "#000",
    },
  };

  handleToggle = () => {
    this.setState({
      nightmode: !this.state.nightmode,
    });
  };

  render() {
    return <LayoutContext.Provider value={{ ...this.state, handleTogle: this.handleToggle }}>{this.props.children}</LayoutContext.Provider>;
  }
}

export default LayoutContextProvider;
