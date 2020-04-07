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
import { fetchForecastByCityName } from "../services/forecast";

const colors = ["green", "red", "yellow"];
const cities = [
  "London",
  "Tegucigalpa",
  "Medellin",
  "Bogota",
  "Shanghai",
  "Moscow",
  "Toronto",
  "Madrid",
  "Berlin",
  "Washington",
  "Tokyo",
  "Paris",
  "New York City",
];

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
  const [city, setCity] = React.useState(predefinedCity || cities[0]);
  const [color, setColor] = React.useState(predefinedColor || colors[0]);
  const [weather, setWeather] = React.useState({
    skies: "",
    minTemp: "",
    maxTemp: "",
    temp: "",
    feelsLike: "",
  });

  React.useEffect(() => {
    if (open) {
      weatherByCityName(city);
    }
  }, [open, city]);

  const weatherByCityName = async (cityToForecast) => {
    try {
      const weather = await fetchForecastByCityName(cityToForecast);
      setWeather(weather);
    } catch (err) {
      console.log("something bad happened");
    }
  };

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
    setCity(text);
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
      setDescription("");
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
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle id="form-dialog-title">Create a new reminder</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Remember description field can only have a maximum of 30 characters.
        </DialogContentText>
        <TextField
          value={description}
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
        <Grid container className={classes.gridContainer}>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="city-input-label">City</InputLabel>
              <Select
                labelId="city-simple-select-label"
                id="city-simple-select"
                value={city}
                onChange={handleCityChange}
              >
                {cities.map((cityOption) => (
                  <MenuItem key={cityOption} value={cityOption}>
                    {cityOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel
                id="color-input-label"
                className={classes[`${color}MenuItem`]}
              >
                Color
              </InputLabel>
              <Select
                labelId="color-simple-select-label"
                id="color-simple-select"
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
        <Grid container className={classes.gridContainer}>
          <Grid item xs={4}>
            <Typography>Pick a date and time:</Typography>
            <DatePicker
              selected={date}
              onChange={handleDatePickerChange}
              showTimeSelect
            />
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>Weather in {city}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">Skies: {weather.skies}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">
                Temperature: {weather.temp}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">
                Max temperature: {weather.maxTemp}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">
                Min temperature: {weather.minTemp}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">
                Feels like: {weather.feelsLike}
              </Typography>
            </Grid>
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
    marginTop: "1px",
  },
  gridContainer: {
    padding: theme.spacing(1),
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
  dialogPaper: {
    minHeight: "560px",
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
