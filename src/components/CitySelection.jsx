import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

function EventCitySelection(props) {
  const handleCityChange = (event) => {
    props.setCity(event.target.value);
  };

  const generateCityOptions = () => {
    const cityOptions = [
      { title: "Jerusalem, Israel", value: "Jerusalem" },
      { title: "Tel Aviv, Israel", value: "Tel Aviv" },
      { title: "New York, USA", value: "New York" },
    ];

    return cityOptions.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.title}
      </MenuItem>
    ));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" sx={{ mr: 2.5  }}>
        Select City:
      </Typography>
      <Select
        value={props.city}
        onChange={handleCityChange}
        sx={{ minWidth: 200 }}
      >
        {generateCityOptions()}
      </Select>
    </Box>
  );
}

export default EventCitySelection;
