import { combineReducers } from "redux";
import counter from "./counter";
import theme from "./theme";
const rootReducer = combineReducers(
    { counter,theme }
);
export default rootReducer;
