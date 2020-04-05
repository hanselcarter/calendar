import { combineReducers } from "redux";
import reminders from "./reminders";

export default (state, action) => {
  const rootReducer = combineReducers({
    remindersReducer: reminders,
  });

  return rootReducer(state, action);
};
