import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SingleDay = ({ day }) => (
  <Grid item xs={1}>
    <Typography> {day}</Typography>
  </Grid>
);

const DaysHeader = () => {
  return (
    <Grid container>
      {dayNames.map((dayName, index) => (
        <SingleDay key={`dayName${index}`} day={dayName} />
      ))}
    </Grid>
  );
};

SingleDay.propTypes = {
  day: PropTypes.string.isRequired,
};

export default DaysHeader;
