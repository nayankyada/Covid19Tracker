import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState(["USA", "India"]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const counries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl>
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}

      {/* infobox */}
      {/* infobox */}
      {/* infobox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}
