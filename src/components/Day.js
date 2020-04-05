import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Reminder from "./Reminder";
import ReminderDialog from "./ReminderDialog";
import { useDispatch } from "calendarReduxHooks";
import { startAddReminder, startDeleteReminder } from "Actions/index";
import moment from "moment";

const Day = ({ day, select, selected, reminders }) => {
  const { date, isCurrentMonth, isToday, number } = day;
  // console.log(reminders, "reminders");
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveReminder = async (reminder) => {
    try {
      await dispatch(startAddReminder(reminder));
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
    handleClose();
  };

  const remindersFotThisDate = reminders.filter((reminder) => {
    const dateObj = new Date(reminder.date);
    const reminderDate = moment(dateObj);
    const clonedDayDate = date.clone();

    return (
      reminderDate
        .startOf("day")
        .toDate()
        .toString() ==
      clonedDayDate
        .startOf("day")
        .toDate()
        .toString()
    );
  });

  return (
    <>
      <Box
        bgcolor="background.paper"
        borderColor="rgba(0, 0, 0, 0.08)"
        m={1}
        borderRadius={3}
        border={1}
        component="span"
        m={1}
        key={date.toString()}
        className={
          date.isSame(selected)
            ? classes.boxToday
            : isToday
            ? classes.boxToday
            : isCurrentMonth
            ? classes.boxMonth
            : classes.box
        }
        onClick={() => select(day)}
      >
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              <Typography>{number}</Typography>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                aria-label="add-reminder"
                size="small"
                className={classes.addButton}
                onClick={handleClickOpen}
              >
                <AddCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
          {remindersFotThisDate.map((reminder) => (
            <Reminder key={reminder.uid} reminder={reminder} />
          ))}
        </Grid>
      </Box>
      <ReminderDialog
        open={open}
        handleClose={handleClose}
        handleActionButton={saveReminder}
        initialDate={date.clone()}
        closeButtonLabel="CANCEL"
        actionButtonLabel="SAVE"
      />
    </>
  );
};

const useStyles = makeStyles(() => ({
  box: {
    padding: "11px",
    height: "100px",
    width: "100%",
    overflowY: "scroll",
  },
  boxToday: {
    padding: "11px",
    height: "100px",
    width: "100%",
    overflowY: "scroll",
  },
  boxMonth: {
    padding: "11px",
    alignSelf: "stretch",
    height: "100px",
    width: "100%",
    overflowY: "scroll",
  },
  addButton: {
    marginTop: "-4px",
  },
}));

Day.propTypes = {
  day: PropTypes.object.isRequired,
  select: PropTypes.func,
  selected: PropTypes.object,
  reminders: PropTypes.array,
};

export default Day;
