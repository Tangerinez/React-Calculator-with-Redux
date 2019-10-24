import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux-js/store";
import "./index.css";

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
