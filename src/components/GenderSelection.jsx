import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const genderList = [
  'Female',
  'Male',
  'Non-binary',
  'Transgender',
  'Agender',
  'Genderqueer',
  'Genderfluid',
  'Two-Spirit',
  'Bigender',
  'Androgynous',
  'Demigender',
  'Neutrois',
  'Pangender',
  'Gender Nonconforming',
  'Prefer Not to Say',
  'Cisgender Female',
  'Cisgender Male',
  'Other',
];

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const getMenuItemStyle = (gender) => {
    return {
      fontWeight: selectedGender === gender ? 600 : 400,
    };
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Select Your Gender:
        </Typography>
      </Box>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          {genderList.map((gender) => (
            <MenuItem
              key={gender}
              value={gender}
              style={getMenuItemStyle(gender)}
              sx={{ '&.Mui-selected': { backgroundColor: '#f8f8f8' } }}
            >
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
