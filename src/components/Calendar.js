import React from "react";
import moment from "moment";
import DaysHeader from "./DaysHeader";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Month from "./Month";
import Week from "./Week";
import { startSetReminders } from "Actions/index";
import { useDispatch, useSelector } from "calendarReduxHooks";

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

  React.useEffect(() => {
    fetchReminders();
  }, [fetchReminders]);

  const fetchReminders = async () => {
    console.log("fetchReminders");
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

  return (
    <section className="calendar">
      <header className="header">
        <Grid container alignItems="center" alignContent="center">
          <Grid item xs={3}>
            <Button onClick={previous}>Previous</Button>
          </Grid>
          <Grid item xs={3}>
            <Month month={month} />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={next}>Next</Button>
          </Grid>
        </Grid>
        <DaysHeader />
      </header>
      {renderWeeks()}
    </section>
  );
};

export default Calendar;
