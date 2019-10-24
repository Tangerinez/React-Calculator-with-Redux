export const INCREMENT = "INCREMENT"; // abstraction for action constants
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT }); // abstraction for action creators
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
