import React from "react";
import moment from "moment";
import DaysHeader from "./DaysHeader";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Month from "./Month";
import Week from "./Week";
import { startSetReminders } from "Actions/index";
import { useDispatch, useSelector } from "calendarReduxHooks";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const initialState = {
  month: moment(),
  selected: moment().startOf("day"),
};

const Calendar = () => {
  const [month, setMonth] = React.useState(initialState.month);
  const [selected, setSelected] = React.useState(initialState.selected);
  const { reminders, isLoading } = useSelector(
    (state) => state.remindersReducer
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    fetchReminders();
  }, [fetchReminders]);

  const fetchReminders = async () => {
    await dispatch(startSetReminders());
  };

  const previous = () => {
    const previousMonth = month.clone().subtract(1, "month");

    setMonth(previousMonth);
  };

  const next = () => {
    const nextMonth = month.clone().add(1, "month");

    setMonth(nextMonth);
  };

  const select = (day) => {
    console.log(day.date);
    setSelected(day.date);
  };

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let clonedDate = month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = clonedDate.month();

    while (!done) {
      weeks.push(
        <Week
          key={clonedDate}
          date={clonedDate.clone()}
          month={month}
          select={select}
          selected={selected}
          reminders={reminders}
        />
      );

      clonedDate.add(1, "w");

      done = count++ > 2 && monthIndex !== clonedDate.month();
      monthIndex = clonedDate.month();
    }

    return weeks;
  };

  if (isLoading) {
    return (
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <CircularProgress color="secondary" />
      </Grid>
    );
  }

  return (
    <div>
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
          className={classes.actionsGrid}
        >
          <Grid item>
            <IconButton
              onClick={previous}
              size="small"
              color="primary"
              className={classes.actionsButton}
            >
              <NavigateBeforeIcon />
              <Typography> Previous</Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <Month month={month} />
          </Grid>
          <Grid item>
            <IconButton
              onClick={next}
              size="small"
              color="primary"
              className={classes.actionsButton}
            >
              <Typography>Next</Typography>
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        </Grid>
        <DaysHeader />
      </div>
      {renderWeeks()}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  actionsButton: {
    borderRadius: "2px",
  },
}));

export default Calendar;
