import React, { useState } from "react";
import { AddCustomerButton } from "./HomeElements";
import { FaUserPlus } from "react-icons/fa";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddCustomer = () => {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [formError, setFormError] = useState(false);

  const handleClickOpen = () => {
    setDialogueOpen(true);
  };

  const handleSubmit = () => {
    if (customerName === "") {
      setFormError(true);
      return;
    }
    setDialogueOpen(false);
    setCustomerName("");
    setFormError(false);
  };

  return (
    <>
      <AddCustomerButton onClick={handleClickOpen}>
        <FaUserPlus />
        <span>ADD CUSTOMER</span>
      </AddCustomerButton>
      <Dialog
        open={dialogueOpen}
        onClose={() => setDialogueOpen(false)}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Add new customer</DialogTitle>
        <DialogContent>
          <TextField
            autoComplete
            autoFocus
            margin="dense"
            id="customer-name"
            label="Customer name"
            type="text"
            fullWidth
            error={formError}
            variant="standard"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            onKeyPress
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>CONTINUE</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCustomer;
