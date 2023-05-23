import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function AboutMe() {
  const [aboutText, setAboutText] = useState('');

  const handleAboutChange = (event) => {
    setAboutText(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          About Me:
        </Typography>
      </Box>
      <TextField
        id="about"
        label="Tell us about yourself"
        multiline
        rows={4}
        variant="outlined"
        value={aboutText}
        onChange={handleAboutChange}
        sx={{ width: 300 }}
      />
    </Box>
  );
}
