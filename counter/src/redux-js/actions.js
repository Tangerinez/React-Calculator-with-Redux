import { INCREMENT, DECREMENT, RESET } from "./constants";

export const increment = () => ({ type: INCREMENT }); // abstraction for action creators
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
