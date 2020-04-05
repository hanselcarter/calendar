import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ReminderDialog from "./ReminderDialog";
import { useDispatch } from "calendarReduxHooks";
import { startDeleteReminder, startEditReminder } from "Actions/index";
import moment from "moment";

const Reminder = ({ reminder }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editReminder = async (editedReminder) => {
    try {
      await dispatch(
        startEditReminder({ ...editedReminder, uid: reminder.uid })
      );
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
    handleClose();
  };

  const deleteReminder = async () => {
    try {
      await dispatch(startDeleteReminder(reminder.uid));
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
    handleClose();
  };

  const dateObj = new Date(reminder.date);
  const reminderDate = moment(dateObj);

  return (
    <>
      <Grid
        container
        item
        xs={12}
        className={classes[reminder.color]}
        onClick={handleClickOpen}
      >
        <Tooltip title={reminder.description}>
          <Typography variant="caption" noWrap>
            {reminder.description}
          </Typography>
        </Tooltip>
      </Grid>
      <ReminderDialog
        open={open}
        handleClose={handleClose}
        handleActionButton={editReminder}
        initialDate={reminderDate.clone()}
        closeButtonLabel="CANCEL"
        actionButtonLabel="EDIT"
        alternativeButtonLabel="DELETE"
        handleAlternativeButtonLabelButtonClick={deleteReminder}
        predefinedDescription={reminder.description}
        predefinedCity={reminder.city}
        predefinedColor={reminder.color}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: "#ffcdd2",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
  yellow: {
    backgroundColor: "#fff9c4",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
  green: {
    backgroundColor: "#a7ffeb",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
}));

Reminder.propTypes = {
  reminder: PropTypes.object.isRequired,
};

export default Reminder;
