import React, { useState } from "react";
import jsonData from "./countryData.json";
import Country from "./utils/types/Country.type";
import TableComponent from "./components/Table";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import "./styles/App.css";
import FilterComponent from "./components/FilterComponent";

const App: React.FC = () => {
  // eslint-disable-next-line
  const [data, setData] = useState<{ countries: Country[] }>(jsonData);
  const [continentFilter, setContinentFilter] = useState<string>("");
  const [hasStatesFilter, setHasStatesFilter] = useState<boolean | "">("");
  // eslint-disable-next-line
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC" | "">("");

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Country Data App
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="h1" gutterBottom>
        Country Data Table
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        This table displays information about different countries including
        their names, continents, whether they have states, country codes, and
        international names. You can use the filter fields above the table to
        filter by continent and whether the country has states. You can also
        sort the table by the name in ascending or descending order.
      </Typography>

      <Stack
        mt={2}
        mb={4}
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <FilterComponent
          continentFilter={continentFilter}
          setContinentFilter={setContinentFilter}
          setHasStatesFilter={setHasStatesFilter}
          hasStatesFilter={hasStatesFilter}
        />
      </Stack>
      <TableComponent
        data={data.countries
          .filter((country) => {
            const matchesContinent = country.continent
              .toLowerCase()
              .includes(continentFilter.toLowerCase());
            const matchesHasStates =
              hasStatesFilter === "" || country.hasStates === hasStatesFilter;
            return matchesContinent && matchesHasStates;
          })
          .sort((a, b) => {
            if (sortOrder === "ASC") {
              return a.nameUn.localeCompare(b.nameUn);
            } else if (sortOrder === "DESC") {
              return b.nameUn.localeCompare(a.nameUn);
            }
            return 0;
          })}
      />
    </Container>
  );
};

export default App;
