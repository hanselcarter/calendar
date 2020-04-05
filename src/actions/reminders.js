import { DB } from "./firebase";
import { SET_REMINDERS, ADD_REMINDER, DELETE_REMINDER } from "./types";

export const setReminders = (reminders = []) => ({
  type: SET_REMINDERS,
  payload: {
    reminders,
  },
});

export const addReminder = (reminder = {}) => ({
  type: ADD_REMINDER,
  payload: {
    reminder,
  },
});

export const deleteReminder = (index) => ({
  type: DELETE_REMINDER,
  payload: {
    index,
  },
});

export const startSetReminders = () => {
  return async (dispatch) => {
    const reminders = [];

    const remindersSnapshot = await DB.ref("reminders").once("value");

    if (remindersSnapshot) {
      remindersSnapshot.forEach((reminder) => {
        reminders.push({
          uid: reminder.key,
          ...reminder.val(),
        });
      });
    }

    return dispatch(setReminders(reminders));
  };
};

export const startAddReminder = (reminder) => {
  return async (dispatch) => {
    await DB.ref("reminders").push(reminder);

    return dispatch(addReminder(reminder));
  };
};

export const startDeleteReminder = (reminderUid) => {
  return async (dispatch, getState) => {
    const { reminders = [] } = getState().remindersReducer;
    const reminderToRemoveIndex = reminders.findIndex(
      (reminder) => reminder.uid === reminderUid
    );
    await DB.ref(`reminders/${reminderUid}`).remove();

    return dispatch(deleteReminder(reminderToRemoveIndex));
  };
};
