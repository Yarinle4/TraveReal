import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';

export default function AgeSelection() {
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const generateAgeOptions = () => {
    const ageOptions = [];
    for (let age = 18; age <= 120; age++) {
      ageOptions.push(
        <MenuItem key={age} value={age}>
          {age}
        </MenuItem>
      );
    }
    return ageOptions;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ mr: 1 }}>
        Select Your Age:
      </Typography>
      <Select value={selectedAge} onChange={handleAgeChange} sx={{ minWidth: 200 }}>
        <MenuItem value="">Select Age</MenuItem>
        {generateAgeOptions()}
      </Select>
    </Box>
  );
}
