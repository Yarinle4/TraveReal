import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const textFieldStyle = {
  backgroundColor: "white",
};

function EventsSelection(props) {
  const handleChange = (event) => {
    props.setOption(event.target.value);
  };

  const generateOptions = () => {
    const Options = [
      { title: "Host", value: "Host" },
      { title: "Traveler", value: "Traveler" },
    ];

    return Options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.title}
      </MenuItem>
    ));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h5" sx={{ mr: 2.5 }}>
        Select your role:
      </Typography>
      <Select
        value={props.selection}
        onChange={handleChange}
        sx={{ minWidth: 250 }}
        style={textFieldStyle}
      >
        {generateOptions()}
      </Select>
    </Box>
  );
}

export default EventsSelection;
