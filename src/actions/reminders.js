import { DB } from "./firebase";
import {
  SET_REMINDERS,
  ADD_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from "./types";

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

export const updateReminder = (reminder = {}, index) => ({
  type: UPDATE_REMINDER,
  payload: {
    index,
    reminder,
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
    const snapshot = await DB.ref("reminders").push(reminder);

    return dispatch(addReminder({ ...reminder, uid: snapshot.key }));
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

export const startEditReminder = (editedReminder) => {
  return async (dispatch, getState) => {
    const { reminders = [] } = getState().remindersReducer;
    const reminderToUpdateIndex = reminders.findIndex(
      (reminder) => reminder.uid === editedReminder.uid
    );
    const updates = {};
    updates[`reminders/${editedReminder.uid}`] = editedReminder;

    await DB.ref().update(updates);

    return dispatch(updateReminder(editedReminder, reminderToUpdateIndex));
  };
};
