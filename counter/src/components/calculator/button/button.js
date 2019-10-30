import React from "react";
import "./button.css";

export default ({ onButtonClick, buttonKey }) => {
  let handleClick = () => {
    onButtonClick(buttonKey);
  };
  return <button onClick={handleClick}>{buttonKey}</button>;
};
