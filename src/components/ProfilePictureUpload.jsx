import React, { useState } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

export default function ProfilePictureUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    console.log('Selected File:', selectedFile);
    // Reset the selected file and preview image after upload
    setSelectedFile(null);
    setPreviewImage(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Upload a Profile Picture
        </Typography>
        <Avatar
          alt="Preview"
          src={previewImage}
          sx={{
            width: 80,
            height: 80,
            bgcolor: previewImage ? 'transparent' : 'grey',
          }}
        >
          {!previewImage && <Typography variant="body2">No Image</Typography>}
        </Avatar>
      </Box>
      <input
        accept="image/*"
        type="file"
        id="profile-picture"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="profile-picture">
        <Button variant="contained" component="span">
          Choose from library
        </Button>
      </label>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {selectedFile ? selectedFile.name : 'No file selected'}
      </Typography>
      {selectedFile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Box>
      )}
    </Box>
  );
}
