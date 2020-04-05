import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Reminder from "./Reminder";
import AddReminderDialog from "./AddReminderDialog";
import { useDispatch } from "calendarReduxHooks";
import { startAddReminder, startDeleteReminder } from "Actions/index";

const Day = ({ day, select, selected, reminders }) => {
  const { date, isCurrentMonth, isToday, number } = day;
  console.log(reminders, "reminders");
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
    console.log(date);
    try {
      await dispatch(startAddReminder(reminder));
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
    handleClose();
  };

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
          <Reminder />
          <Reminder />
          <Reminder />
          <Reminder />
          <Reminder />
          <Reminder />
        </Grid>
      </Box>
      <AddReminderDialog
        open={open}
        handleClose={handleClose}
        save={saveReminder}
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
