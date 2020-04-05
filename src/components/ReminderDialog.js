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
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ReminderDialog = ({
  open,
  handleClose,
  handleActionButton,
  initialDate,
  closeButtonLabel,
  actionButtonLabel,
}) => {
  const classes = useStyles();

  const [date, setDate] = React.useState(initialDate.toDate());
  const [description, setDescription] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleDatePickerChange = (date) => {
    setDate(date);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    const text = e.target.value;

    if (text.length <= 30) {
      setDescription(text);
    }
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    const text = e.target.value;

    if (text.length <= 10) {
      setCity(text);
    }
  };

  const handleActionButtonClick = () => {
    if (city && description) {
      const reminder = {
        date: date.toString(),
        description,
        city,
      };
      handleActionButton(reminder);
    }
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
          only 15 characters max.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="description"
          type="email"
          fullWidth
          inputProps={{ maxLength: 30 }}
          onChange={handleDescriptionChange}
          autoComplete="off"
        />
        <TextField
          margin="dense"
          id="city"
          label="City"
          type="email"
          fullWidth
          inputProps={{ maxLength: 15 }}
          onChange={handleCityChange}
          autoComplete="off"
        />
        <Grid container className={classes.gridContainer}>
          <Grid item xs={2}>
            <Typography>Pick a date</Typography>
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              selected={date}
              onChange={handleDatePickerChange}
              showTimeSelect
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {closeButtonLabel}
        </Button>
        <Button
          onClick={handleActionButtonClick}
          color="primary"
          disabled={!city || !description}
        >
          {actionButtonLabel}
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

ReminderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleActionButton: PropTypes.func.isRequired,
  initialDate: PropTypes.object.isRequired,
  closeButtonLabel: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
};

export default ReminderDialog;
