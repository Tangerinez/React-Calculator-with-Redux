import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For using Redux Dev Tools together with other middlewares

const store = createStore(reducer, storeEnhancers(applyMiddleware(thunk))); // Allows us to dispatch actions inside a reducer

export default store;
