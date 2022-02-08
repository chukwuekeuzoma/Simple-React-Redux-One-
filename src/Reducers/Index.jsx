import conterReducer from "./Counter";
import loggedReducer from "./IsLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: conterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
