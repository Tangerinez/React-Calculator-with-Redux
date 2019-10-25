import {
  INCREMENT,
  DECREMENT,
  MULTIPLY,
  DIVIDE,
  EXPRESSION,
  RESET
} from "./constants";

export const increment = () => ({ type: INCREMENT }); // abstraction for action creators
export const decrement = () => ({ type: DECREMENT });
export const multiply = () => ({ type: MULTIPLY });
export const divide = () => ({ type: DIVIDE });
export const expression = () => ({ type: EXPRESSION });
export const reset = () => ({ type: RESET });
