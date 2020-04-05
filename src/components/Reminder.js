import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Reminder = ({ reminder }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes[reminder.color]}>
      <Tooltip title={reminder.description}>
        <Typography variant="caption" noWrap>
          {reminder.description}
        </Typography>
      </Tooltip>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: "#ffcdd2",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
  yellow: {
    backgroundColor: "#fff9c4",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
  green: {
    backgroundColor: "#a7ffeb",
    maxHeight: "20px",
    marginBottom: "2px",
    cursor: "pointer",
  },
}));

Reminder.propTypes = {
  reminder: PropTypes.object.isRequired,
};

export default Reminder;
