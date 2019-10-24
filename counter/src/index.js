import React from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";
import { Provider } from "react-redux";
import store from "./redux-js/store";
import "./index.css";

render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("root")
);
