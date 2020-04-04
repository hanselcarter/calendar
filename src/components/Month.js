import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Month = ({ month }) => (
  <Grid container item xs={12}>
    <Typography align="center">{month.format("MMMM YYYY")}</Typography>
  </Grid>
);

Month.propTypes = {
  month: PropTypes.object.isRequired,
};

export default Month;
