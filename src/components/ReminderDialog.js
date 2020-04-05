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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const colors = ["green", "red", "yellow"];

const ReminderDialog = ({
  open,
  handleClose,
  handleActionButton,
  initialDate,
  closeButtonLabel,
  actionButtonLabel,
  predefinedColor,
  handleAlternativeButtonLabelButtonClick,
  alternativeButtonLabel,
  predefinedDescription = "",
  predefinedCity = "",
}) => {
  const classes = useStyles();

  const [date, setDate] = React.useState(initialDate.toDate());
  const [description, setDescription] = React.useState(predefinedDescription);
  const [city, setCity] = React.useState(predefinedCity);
  const [color, setColor] = React.useState(predefinedColor || colors[0]);

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
        color,
      };
      handleActionButton(reminder);
    }
  };

  const handleChangeColor = (e) => {
    e.preventDefault();
    const color = e.target.value;
    setColor(color);
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
          defaultValue={predefinedDescription}
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="email"
          fullWidth
          inputProps={{ maxLength: 30 }}
          onChange={handleDescriptionChange}
          autoComplete="off"
        />
        <TextField
          defaultValue={predefinedCity}
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
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel
                id="calendar-input-label"
                className={classes[`${color}MenuItem`]}
              >
                Color
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="calendar-simple-select"
                value={color}
                onChange={handleChangeColor}
              >
                {colors.map((color) => (
                  <MenuItem
                    key={color}
                    value={color}
                    className={classes[`${color}MenuItem`]}
                  >
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" id="close-button">
          {closeButtonLabel}
        </Button>
        {alternativeButtonLabel && handleAlternativeButtonLabelButtonClick ? (
          <Button
            onClick={handleAlternativeButtonLabelButtonClick}
            color="primary"
            id="alternative-button"
          >
            {alternativeButtonLabel}
          </Button>
        ) : null}
        <Button
          onClick={handleActionButtonClick}
          color="primary"
          disabled={!city || !description}
          id="action-button"
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  redMenuItem: {
    color: "#ffcdd2 !important",
  },
  greenMenuItem: {
    color: "#a7ffeb !important",
  },
  yellowMenuItem: {
    color: "#fff9c4 !important",
  },
}));

ReminderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleActionButton: PropTypes.func.isRequired,
  initialDate: PropTypes.object.isRequired,
  closeButtonLabel: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
  predefinedColor: PropTypes.string,
  predefinedDescription: PropTypes.string,
  predefinedCity: PropTypes.string,
};

export default ReminderDialog;
