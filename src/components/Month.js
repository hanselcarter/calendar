import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const Month = ({ month }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Typography align="center" className={classes.textColor}>
        {month.format("MMMM YYYY")}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  textColor: {
    borderRadius: "2px",
    color: "#9575cd",
  },
}));

Month.propTypes = {
  month: PropTypes.object.isRequired,
};

export default Month;
