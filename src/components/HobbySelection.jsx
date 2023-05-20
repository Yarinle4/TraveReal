import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const hobbiesList = [
  'Arts',
  'Basketball',
  'Clubbing',
  'Collecting',
  'Cooking',
  'Crafting',
  'Cycling',
  'Dancing',
  'DIY Projects',
  'Drawing',
  'Football',
  'Fishing',
  'Gaming',
  'Gardening',
  'Hiking',
  'Hummus eating',
  'Knitting',
  'Listening to Music',
  'Meditation',
  'Painting',
  'Photography',
  'Playing Musical Instruments',
  'Playing Sports',
  'Reading',
  'Running',
  'Sewing',
  'Shopping',
  'Singing',
  'Surfing',
  'Swimming',
  'Traveling',
  'Volunteering',
  'Watching Movies',
  'Woodworking',
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
