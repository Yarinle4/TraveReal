import React, { useState } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';


export default function EventPictureUpload(props) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    props.setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    console.log('called');
    try {
      console.log('inner call');
      const storageRef = ref(storage, 'events/'+props.selectedFile.name);
      await uploadBytes(storageRef, props.selectedFile);
      
      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);
      console.log('File uploaded successfully. Download URL:', downloadURL);

      // Pass the download URL to the parent component
      props.setSelectedFile({ file: props.selectedFile, downloadURL });
  
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      </Box>
      <input
        accept="image/*"
        type="file"
        id="profile-picture"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="profile-picture">
        <Button sx={{ mb: 4 }}variant="contained" component="span">
          Choose from library
        </Button>
      </label>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {props.selectedFile ? props.selectedFile.name : 'No file selected'}
      </Typography>
      {props.selectedFile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Box>
      )}
    </Box>
  );
}
