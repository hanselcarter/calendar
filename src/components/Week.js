import React from "react";
import Grid from "@material-ui/core/Grid";
import Day from "./Day";
import PropTypes from "prop-types";

const Week = ({ date, month, selected, select, reminders }) => {
  const days = [];
  let clonedDate = date.clone();

  for (let i = 0; i < 7; i++) {
    const day = {
      name: clonedDate.format("dd").substring(0, 1),
      number: clonedDate.date(),
      isCurrentMonth: clonedDate.month() === month.month(),
      isToday: clonedDate.isSame(new Date(), "day"),
      date: clonedDate,
    };

    days.push(
      <Grid container item xs={1} key={`${day.number}${i}`}>
        <Day
          key={`${day.number}${i}`}
          day={day}
          selected={selected}
          select={select}
          reminders={reminders}
        />
      </Grid>
    );

    clonedDate = clonedDate.clone();
    clonedDate.add(1, "day");
  }

  return (
    <Grid container justify="center" key={days[0]}>
      {days}
    </Grid>
  );
};

Week.propTypes = {
  reminders: PropTypes.array.isRequired,
  select: PropTypes.func,
  selected: PropTypes.object,
  month: PropTypes.object,
  date: PropTypes.object,
};

export default Week;
