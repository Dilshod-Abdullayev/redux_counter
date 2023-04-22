import { combineReducers } from "redux";
import darkThemeReducer from "./darkThemeReducer";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  darkThemeReducer,
  counterReducer,
});

export default allReducers;
