import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const textFieldStyle = {
  backgroundColor: "white",
};

export default function AgeSelection(props) {
  const handleAgeChange = (event) => {
    props.setAge(event.target.value);
  };

  const generateAgeOptions = () => {
    const ageOptions = [];
    for (let age = 18; age <= 120; age++) {
      ageOptions.push(
        <MenuItem
          key={age}
          value={age}
          sx={{ "&.Mui-selected": { backgroundColor: "#98FB98" } }}
        >
          {age}
        </MenuItem>
      );
    }
    return ageOptions;
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" sx={{ mr: 1 }}>
        Select Your Age:
      </Typography>
      <Select
        value={props.age}
        onChange={handleAgeChange}
        sx={{ minWidth: 200 }}
        style={textFieldStyle}
      >
        <MenuItem value="">Select Age</MenuItem>
        {generateAgeOptions()}
      </Select>
    </Box>
  );
}
