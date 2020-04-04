import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const Day = ({ day, select, selected }) => {
  const { date, isCurrentMonth, isToday, number } = day;
  const classes = useStyles();

  return (
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
      <Typography>{number}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "11px",
    alignSelf: "stretch",
    maxHeight: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  boxToday: {
    padding: "11px",
    alignSelf: "stretch",
    maxHeight: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  boxMonth: {
    padding: "11px",
    alignSelf: "stretch",
    maxHeight: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

Day.propTypes = {
  day: PropTypes.object.isRequired,
  select: PropTypes.func,
  selected: PropTypes.object,
};

export default Day;
