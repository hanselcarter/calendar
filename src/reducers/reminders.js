import {
  ADD_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
  SET_REMINDERS,
} from "Actions/types";

const INITIAL_STATE = {
  reminders: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REMINDERS:
      return {
        ...state,
        reminders: action.payload.reminders,
        isLoading: false,
      };
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload.reminder],
      };
    case UPDATE_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders.slice(0, action.payload.index),
          action.payload.reminder,
          ...state.reminders.slice(action.payload.index + 1),
        ],
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders.slice(0, action.payload.index),
          ...state.reminders.slice(action.payload.index + 1),
        ],
      };
    case DELETE_ALL_REMINDERS:
      return { ...state, reminders: [], isLoading: true };
    default:
      return state;
  }
};
