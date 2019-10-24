import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk)); // Allows us to dispatch actions inside a reducer

export default store;
