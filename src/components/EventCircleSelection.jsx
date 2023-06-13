import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

function EventCircleSelection(props) {
  const handleCircleChange = (event) => {
    props.setCircle(event.target.value);
  };

  const generateCircleOptions = () => {
    const circleOptions = [
      { title: "Bonding Circle", value: "bonding" },
      { title: "History Circle", value: "history" },
      { title: "Architecture Circle", value: "architecture" },
      { title: "Culinary Circle", value: "culinary" },
      { title: "Digital Nomads Circle", value: "digital-nomads" },
    ];

    return circleOptions.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.title}
      </MenuItem>
    ));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" sx={{ mr: 1 }}>
        Select Circle:
      </Typography>
      <Select
        value={props.Circle}
        onChange={handleCircleChange}
        sx={{ minWidth: 200 }}
      >
        {generateCircleOptions()}
      </Select>
    </Box>
  );
}

export default EventCircleSelection;
