import bugReducer from "./bugReducer";
import { combineReducers } from "redux";
import techReducer from "./techReducer";

export default combineReducers({
  bug: bugReducer,
  tech: techReducer,
});
