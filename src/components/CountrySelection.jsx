import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CountryList = ["Israel", "USA", "UK", "France", "Germany", "Italy"];

const textFieldStyle = {
  backgroundColor: "white",
};

export default function CountrySelection(props) {
  const handleGenderChange = (event) => {
    props.setCountry(event.target.value);
  };

  const getMenuItemStyle = (country) => {
    return {
      fontWeight: country === country ? 600 : 400,
    };
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormControl sx={{ width: 355 }}>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={props.country}
          onChange={handleGenderChange}
          style={textFieldStyle}
        >
          {CountryList.map((country) => (
            <MenuItem
              key={country}
              value={country}
              style={getMenuItemStyle(country)}
              sx={{ "&.Mui-selected": { backgroundColor: "#f8f8f8" } }}
            >
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
