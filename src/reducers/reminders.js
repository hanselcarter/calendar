import {
  ADD_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
} from "Actions/types";

const INITIAL_STATE = {
  reminders: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return state;
    case UPDATE_REMINDER:
      return state;
    case DELETE_REMINDER:
      return state;
    case DELETE_ALL_REMINDERS:
      return state;
    default:
      return state;
  }
};
