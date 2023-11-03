import React from "react";
import {
  TextField,
  Grid,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterComponentProps } from "../utils/types/filter.types";

const FilterComponent: React.FC<FilterComponentProps> = ({
  continentFilter,
  setContinentFilter,
  hasStatesFilter,
  setHasStatesFilter,
}) => {
  return (
    <Grid container spacing={2} alignItems="flex-end" justifyContent={"left"}>
      <Grid item>
        <TextField
          label="Continent Filter"
          value={continentFilter} // Value of the continent filter input
          onChange={(e) => setContinentFilter(e.target.value)} // Function to handle changes in the continent filter input
          style={{ minWidth: "150px" }}
        />
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Has State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hasStatesFilter as any} // Value of the hasStates filter select input
            label="Has State"
            style={{ minWidth: "150px" }}
            onChange={(e: SelectChangeEvent) =>
              setHasStatesFilter(e.target.value as boolean | "")
            } // Function to handle changes in the hasStates filter select input
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={true as any}>Yes</MenuItem>
            <MenuItem value={false as any}>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={() => {
            setContinentFilter(""); // Function to clear the continent filter
            setHasStatesFilter(""); // Function to clear the hasStates filter
          }}
          style={{ minWidth: "150px" }}
        >
          Clear Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
