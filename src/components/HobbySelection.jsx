import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const hobbiesList = [
  'Reading',
  'Writing',
  'Cooking',
  'Photography',
  'Gardening',
  'Painting',
  'Playing Sports',
  'Hiking',
  'Cycling',
  'Singing',
  'Dancing',
  'Playing Musical Instruments',
  'Drawing',
  'Traveling',
  'Watching Movies',
  'Listening to Music',
  'Gaming',
  'Collecting',
  'Yoga',
  'Meditation',
  'Volunteering',
  'Fishing',
  'Shopping',
  'DIY Projects',
  'Crafting',
  'Sewing',
  'Knitting',
  'Woodworking',
  'Running',
  'Swimming',
  'Aquascaping',
  'yoga',
  'Hummus eating'
];

export default function HobbySelection() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleHobbyChange = (event) => {
    setSelectedHobbies(event.target.value);
  };

  const getMenuItemStyle = (hobby) => {
    return {
      fontWeight: selectedHobbies.includes(hobby) ? 600 : 400,
    };
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Select Up To 5 Hobbies:
        </Typography>
      </Box>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="hobby-select-label">Hobbies</InputLabel>
        <Select
          labelId="hobby-select-label"
          id="hobby-select"
          multiple
          value={selectedHobbies}
          onChange={handleHobbyChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {hobbiesList.map((hobby) => (
            <MenuItem
              key={hobby}
              value={hobby}
              style={getMenuItemStyle(hobby)}
              sx={{ '&.Mui-selected': { backgroundColor: '#98FB98' } }}
            >
              {hobby}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
