import * as React from "react";
import { useState } from "react";
import {Box, FormControl, InputLabel, Select, MenuItem, Chip, Typography } from "@mui/material";

const languagesList = [
    "Albanian",
    "Arabic",
    "Bengali",
    "Bulgarian",
    "Catalan",
    "Chinese",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Filipino",
    "Finnish",
    "French",
    "German",
    "Greek",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Icelandic",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Korean",
    "Latvian",
    "Lithuanian",
    "Luxembourgish",
    "Malay",
    "Maltese",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Serbian",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Swahili",
    "Swedish",
    "Tamil",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Vietnamese",
    'other',
  ];
  

export default function LanguageSelection(props) {

  const handleLanguageChange = (event) => {
    props.setSelectedLanguages(event.target.value);
  };

  return (
    <Box sx={{  pd:4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6" sx={{pt:2,  mr: 1 }}>
          What languages can you speak?
      </Typography>
      <Box sx={{pt:3, display: 'flex', alignItems: 'center', mb: 2 }}>
    <FormControl sx={{  width: 300 }}>
      <InputLabel id="language-select-label">Languages</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        multiple
        value={props.selectedLanguages}
        onChange={handleLanguageChange}
        renderValue={(selected) => (
          <div style={{  display: "flex", flexWrap: "wrap" }}>
            {selected.map((language) => (
              <Chip key={language} label={language} style={{ margin: 2}} />
            ))}
          </div>
        )}
      >
        {languagesList.map((language) => (
          <MenuItem key={language} value={language} sx={{ '&.Mui-selected': { backgroundColor: '#98FB98' } }} >
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        </Box>
    </Box>
  );
}
