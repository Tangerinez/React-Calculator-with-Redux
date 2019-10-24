import { INCREMENT, DECREMENT, MULTIPLY, DIVIDE, RESET } from "./constants";

export const increment = () => ({ type: INCREMENT }); // abstraction for action creators
export const decrement = () => ({ type: DECREMENT });
export const multiply = () => ({ type: MULTIPLY });
export const divide = () => ({ type: DIVIDE });
export const reset = () => ({ type: RESET });
