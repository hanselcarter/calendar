import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const AddReminderDialog = ({ open, handleClose, save }) => {
  const classes = useStyles();

  const [date, setDate] = React.useState(moment().toDate());

  const handleChange = (date) => {
    console.log(date);
    setDate(date);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create a new reminder</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Remember description field will only allow 30 characters max and city
          only 10 characters max.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="city"
          label="City"
          type="email"
          fullWidth
        />
        <Grid container className={classes.gridContainer}>
          <Grid item xs={2}>
            <Typography>Pick a date</Typography>
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              selected={date}
              onChange={handleChange}
              showTimeSelect
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={save} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  datePickerGrid: {
    marginTop: "-2px",
  },
  gridContainer: {
    padding: theme.spacing(2),
  },
}));

AddReminderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default AddReminderDialog;
