import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import styled from "styled-components";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Replace with the correct path to your Firebase instance

const StyledTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Montserrat";
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const textFieldStyle = {
  backgroundColor: "white",
};

function CreateEventPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const uploadedPhotos = Array.from(e.target.files);
    setPhotos((prevPhotos) => [...prevPhotos, ...uploadedPhotos]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = {
      name,
      description,
      date,
      time,
      location,
      host: "Your event host data",
    };
  
    try {
      // Store the event data in Firebase Firestore using the existing instance
      const docRef = await db.collection("events").doc();
      await docRef.set(eventData);
      console.log("Event created with ID: ", docRef.id);
      // Perform any additional actions or navigate to another page
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

    
  

  const navigate = useNavigate();

  return (
    <StyledDiv>
      <ResponsiveAppBar position="fixed" />
      <PageHeader></PageHeader>
      <StyledTitle variant="h4" component="h1">
        Create New Event
      </StyledTitle>
      <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth={400}>
        <TextField
          id="event-name"
          label="Event Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={handleNameChange}
          style={textFieldStyle}
        />
        <TextField
          id="event-description"
          label="Event Description"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          style={textFieldStyle}
        />
        <TextField
          id="event-date"
          label="Event Date"
          type="date"
          variant="outlined"
          margin="normal"
          fullWidth
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          style={textFieldStyle}
        />
        <TextField
          id="event-time"
          label="Event Time"
          type="time"
          variant="outlined"
          margin="normal"
          fullWidth
          value={time}
          onChange={handleTimeChange}
          InputLabelProps={{ shrink: true }}
          style={textFieldStyle}
        />
        <TextField
          id="event-location"
          label="Event Location"
          variant="outlined"
          margin="normal"
          fullWidth
          value={location}
          onChange={handleLocationChange}
          style={textFieldStyle}
        />
        <Box mb={2}>
          <Button variant="contained" component="label" sx={{ width: 400 }}>
            Upload Event Photos
            <input type="file" multiple hidden onChange={handlePhotoUpload} />
          </Button>
        </Box>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              border: "none",
            }}
          >
            <Button
              onClick={() => navigate("/HomePage")}
              variant="Outlined"
              sx={{ width: "120px" }}
            >
              Cancel
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                marginLeft: "-30px",
                width: "30px",
                borderColor: "#F3FBF4",
              }}
            />
            <Button
              onClick={() => navigate("/CreateEventCircles")}
              variant="Outlined"
              sx={{ width: "120px" }}
            >
              Next
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledDiv>
  );
} export default CreateEventPage;
