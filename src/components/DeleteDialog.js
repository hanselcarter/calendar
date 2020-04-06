import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DeleteDialog = ({ open, handleYesClick, handleClose }) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure want to delete all the reminders?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          By clicking yes, you will delete all the reminders fot this date.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          No
        </Button>
        <Button onClick={handleYesClick} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default DeleteDialog;
