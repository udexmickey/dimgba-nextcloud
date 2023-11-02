import React from "react";
import { TextField, Grid, Button, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface FilterComponentProps {
  continentFilter: string;
  setContinentFilter: React.Dispatch<React.SetStateAction<string>>;
  hasStatesFilter: boolean | "";
  setHasStatesFilter: React.Dispatch<React.SetStateAction<boolean | "">>;
}
  
const FilterComponent: React.FC<FilterComponentProps> = ({
  continentFilter,
  setContinentFilter,
  hasStatesFilter,
  setHasStatesFilter,
}) => {
  return (
    <Grid container spacing={2} alignItems="flex-end" justifyContent={'left'}>
      <Grid item>
        <TextField
          label="Continent Filter"
          value={continentFilter}
          onChange={(e) => setContinentFilter(e.target.value)}
          style={{ minWidth: "150px" }}
        />
      </Grid>
      <Grid item >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Has State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hasStatesFilter as any}
          label="Has State"
          style={{ minWidth: "150px" }}
          onChange={(e: SelectChangeEvent) => setHasStatesFilter(e.target.value as boolean | "")}
        >
          <MenuItem value={''}>All</MenuItem>
          <MenuItem value={true as any}>Yes</MenuItem>
          <MenuItem value={false as any}>No</MenuItem>
        </Select>
      </FormControl>
    </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={() => {
            setContinentFilter("");
            setHasStatesFilter("");
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
