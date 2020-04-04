import React from "react";
import Grid from "@material-ui/core/Grid";
import Day from "./Day";

const Week = ({ date, month, selected, select }) => {
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
      <Grid container item xs={1} key={i}>
        <Day key={i} day={day} selected={selected} select={select} />
      </Grid>
    );

    clonedDate = clonedDate.clone();
    clonedDate.add(1, "day");
  }

  return (
    <Grid container key={days[0]}>
      {days}
    </Grid>
  );
};

export default Week;
