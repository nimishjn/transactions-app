import React, { useState } from "react";
import { AddCustomerButton } from "./HomeElements";
import { FaUserPlus } from "react-icons/fa";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AddCustomer = ({ customerData, setCustomerData }) => {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [formError, setFormError] = useState(false);
  // const [formCountryCode, setFormCountryCode] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleClickOpen = () => {
    setDialogueOpen(true);
  };

  const handleSubmit = () => {
    if (customerName === "") {
      setFormError(true);
      return;
    } else if (customerData.some((e) => e.name === customerName)) {
      setFormError(true);
      return;
    }

    let tempCustomerData = [...customerData];

    tempCustomerData.unshift({
      name: customerName,
      lastTransactionDate: new Date(),
      amount: 0,
      phoneNumber: customerPhone,
      transactions: [],
    });

    setCustomerData(tempCustomerData);

    setDialogueOpen(false);
    setCustomerName("");
    setCustomerPhone("");
    setFormError(false);
  };

  return (
    <>
      <AddCustomerButton
        style={{
          display: dialogueOpen && "none",
        }}
        onClick={handleClickOpen}
      >
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
            autoFocus
            margin="dense"
            id="customer-name"
            label="Customer Name *"
            type="text"
            fullWidth
            error={formError}
            variant="outlined"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          {/* <FormControl>
            <InputLabel id="demo-simple-select-label">Code</InputLabel>
            <Select
              labelId="form-country-code"
              id="demo-simple-select-standard"
              value={formCountryCode}
              onChange={(e) => setFormCountryCode(e.target.value)}
              label="Age"
            >
              <MenuItem selected value="None">
                None
              </MenuItem>
              {require("country-data")
                .countries.all.filter(
                  (e) =>
                    e.status !== "deleted" &&
                    e.countryCallingCodes[0] &&
                    e.emoji
                )
                .map((element) => {
                  return (
                    <MenuItem value={element.countryCallingCodes[0]}>
                      <CountryOptionRow>
                        {element.emoji} {element.countryCallingCodes[0]}
                      </CountryOptionRow>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl> */}
          <TextField
            margin="dense"
            id="customer-phone"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="outlined"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
          <Button
            variant="text"
            disabled={!customerName && !customerPhone}
            onClick={() => {
              setCustomerName("");
              setCustomerPhone("");
            }}
          >
            Clear
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>CONTINUE</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCustomer;
