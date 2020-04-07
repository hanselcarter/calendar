import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Reminder from "./Reminder";
import ReminderDialog from "./ReminderDialog";
import { useDispatch } from "calendarReduxHooks";
import { startAddReminder, startDeleteReminder } from "Actions/index";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteDialog from "./DeleteDialog";

const Day = ({ day, select, selected, reminders }) => {
  const { date, isCurrentMonth, isToday, number } = day;

  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const saveReminder = async (reminder) => {
    try {
      await dispatch(startAddReminder(reminder));
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
    handleClose();
  };

  const deleteAllRemindersForCurrentDate = async () => {
    try {
      handleCloseDelete();
      const remindersToDelete = filterRemindersForCurrentDate();
      remindersToDelete.reverse();

      await Promise.all(
        remindersToDelete.map(async (reminderToDelete) => {
          await dispatch(startDeleteReminder(reminderToDelete.uid));
        })
      );
    } catch (err) {
      console.log("sorry, something unexpected happened");
    }
  };

  const filterRemindersForCurrentDate = () => {
    const remindersForCurrentDate = reminders.filter((reminder) => {
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
    return remindersForCurrentDate.sort((a, b) => {
      const dateObjA = new Date(a.date).getTime();
      const dateObjB = new Date(b.date).getTime();

      return dateObjA - dateObjB;
    });
  };

  const remindersForThisDate = filterRemindersForCurrentDate();

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
            ? classes.boxSelected
            : date.clone().format("dddd") == "Saturday" ||
              date.clone().format("dddd") == "Sunday"
            ? classes.boxWeekend
            : isCurrentMonth
            ? classes.boxMonth
            : classes.box
        }
        onClick={() => select(day)}
      >
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={5}>
              <Typography>{number}</Typography>
            </Grid>
            <Grid item xs={4}>
              {remindersForThisDate.length > 0 ? (
                <Tooltip title="Delete all reminders for this date">
                  <IconButton
                    id="delete-all-reminder"
                    aria-label="add-reminder"
                    size="small"
                    className={classes.addButton}
                    onClick={handleClickOpenDelete}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </Tooltip>
              ) : null}
            </Grid>
            <Grid item xs={3}>
              <Tooltip title="Add reminder">
                <IconButton
                  id="add-reminder"
                  aria-label="add-reminder"
                  size="small"
                  className={classes.addButton}
                  onClick={handleClickOpen}
                >
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          {remindersForThisDate.map((reminder) => (
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
      <DeleteDialog
        open={openDelete}
        handleClose={handleCloseDelete}
        handleYesClick={deleteAllRemindersForCurrentDate}
      />
    </>
  );
};

const useStyles = makeStyles(() => ({
  box: {
    padding: "11px",
    height: "80px",
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#eeeeee",
  },
  boxWeekend: {
    padding: "11px",
    height: "80px",
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#e0e0e0",
  },
  boxMonth: {
    padding: "11px",
    alignSelf: "stretch",
    height: "80px",
    width: "100%",
    overflowY: "auto",
  },
  boxSelected: {
    padding: "11px",
    height: "80px",
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#e3f2fd",
  },
  addButton: {
    marginTop: "-4px",
    paddingLeft: "2px",
  },
}));

Day.propTypes = {
  day: PropTypes.object.isRequired,
  select: PropTypes.func,
  selected: PropTypes.object,
  reminders: PropTypes.array,
};

export default Day;
