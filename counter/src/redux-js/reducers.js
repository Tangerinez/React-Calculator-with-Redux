import {
  INCREMENT,
  DECREMENT,
  MULTIPLY,
  DIVIDE,
  EXPRESSION,
  RESET
} from "./constants";

const initialState = {
  count: 0,
  expressionArray: []
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
    case MULTIPLY:
      return {
        count: state.count * 2
      };
    case DIVIDE:
      return {
        count: state.count / 2
      };
    case EXPRESSION:
      return {
        ...state,
        expressionArray: state.expressionArray.concat(action)
      };
    case RESET:
      return {
        expressionArray: [],
        count: 0
      };
    default:
      return state;
  }
}

export default reducer;
