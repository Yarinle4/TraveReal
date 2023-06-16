import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const genderList = ["Female", "Male", "Other"];

const textFieldStyle = {
  backgroundColor: "white",
};

export default function GenderSelection(props) {
  const handleGenderChange = (event) => {
    props.setGender(event.target.value);
  };

  const getMenuItemStyle = (gender) => {
    return {
      fontWeight: gender === gender ? 600 : 400,
    };
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Select Your Gender:
        </Typography>
      </Box>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={props.gender}
          onChange={handleGenderChange}
          style={textFieldStyle}
        >
          {genderList.map((gender) => (
            <MenuItem
              key={gender}
              value={gender}
              style={getMenuItemStyle(gender)}
              sx={{ "&.Mui-selected": { backgroundColor: "#f8f8f8" } }}
            >
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
