import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Reminder = ({ color = "red" }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes[color]}>
      <Tooltip title="Click me for more details">
        <Typography variant="caption">reminder</Typography>
      </Tooltip>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: "#ffcdd2",
    maxHeight: "20px",
    marginBottom: "2px",
  },
}));

Reminder.propTypes = {
  color: PropTypes.string,
};

export default Reminder;
