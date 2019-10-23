import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "./actions";
import "./index.css";

const initialState = {
  count: 0
};
// Reducer rule #1: Never return undefined from a reducer
// Reducer rule #2: Reducers must be pure functions - thus, DON't modify the state argument
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
