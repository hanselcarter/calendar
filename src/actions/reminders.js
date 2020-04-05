import { DB } from "./firebase";
import { SET_REMINDERS } from "./types";

export const setReminders = (reminders = []) => ({
  type: SET_REMINDERS,
  payload: {
    reminders,
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
