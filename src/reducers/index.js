import { combineReducers } from "redux";
import { CLEAN_REDUCER } from "../actions/types";
// import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // userReducer,
});

const cleanupReducer = (state, action) => {
  if (action.type === CLEAN_REDUCER) {
    state = undefined;
  }

  return rootReducer(state, action);
};

export default cleanupReducer;
