import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FcClearFilters } from "react-icons/fc";

const FilterDialog = ({
  filterDialogOpen,
  setFilterDialogOpen,
  filterValue,
  setFilterValue,
  sortValue,
  setSortValue,
}) => {
  const [tempFilterValue, setTempFilterValue] = useState(filterValue);
  const [tempSortValue, setTempSortValue] = useState(sortValue);

  const handleFilterDialogClose = () => {
    setTempFilterValue(filterValue);
    setTempSortValue(sortValue);
    setFilterDialogOpen(false);
  };

  const handleFilterDialogSubmit = () => {
    setFilterValue(tempFilterValue);
    setSortValue(tempSortValue);
    setFilterDialogOpen(false);
  };

  const handleFilterChange = (event) => {
    setTempFilterValue(event.target.value);
  };

  const handleSortChange = (event) => {
    setTempSortValue(event.target.value);
  };

  const resetFilter = () => {
    setTempFilterValue("All");
    setTempSortValue("Most Recent");
  };

  return (
    <div>
      <Dialog
        open={filterDialogOpen}
        onClose={handleFilterDialogClose}
        fullWidth
      >
        <DialogTitle>Filter by</DialogTitle>
        <DialogContent>
          <RadioGroup
            aria-label="filterBy"
            name="radio-buttons-group"
            onChange={handleFilterChange}
            value={tempFilterValue}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="You will get"
              control={<Radio />}
              label="You will get"
            />
            <FormControlLabel
              value="You will give"
              control={<Radio />}
              label="You will give"
            />
            <FormControlLabel
              value="Settled"
              control={<Radio />}
              label="Settled"
            />
          </RadioGroup>
        </DialogContent>
        <DialogTitle>Sort by</DialogTitle>
        <DialogContent>
          <RadioGroup
            aria-label="sortBy"
            name="radio-buttons-group"
            onChange={handleSortChange}
            value={tempSortValue}
          >
            <FormControlLabel
              value="Most Recent"
              control={<Radio />}
              label="Most Recent"
            />
            <FormControlLabel
              value="Highest Amount"
              control={<Radio />}
              label="Highest Amount"
            />
            <FormControlLabel
              value="By Name (A-Z)"
              control={<Radio />}
              label="By Name (A-Z)"
            />
            <FormControlLabel
              value="Oldest"
              control={<Radio />}
              label="Oldest"
            />
            <FormControlLabel
              value="Least Amount"
              control={<Radio />}
              label="Least Amount"
            />
          </RadioGroup>
        </DialogContent>
        <Button
          variant="outlined"
          color="error"
          startIcon={<FcClearFilters />}
          style={{
            margin: 10,
          }}
          onClick={resetFilter}
        >
          Clear Filter
        </Button>
        <DialogActions>
          <Button onClick={handleFilterDialogClose}>Cancel</Button>
          <Button onClick={handleFilterDialogSubmit}>View Result</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterDialog;
