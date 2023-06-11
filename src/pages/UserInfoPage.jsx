import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import { useNavigate } from "react-router-dom";
import ProfilePictureUpload from "../components/ProfilePictureUpload.jsx";
import { createGlobalStyle } from "styled-components";
import AgeSelection from "../components/AgeSelection.jsx";
import AboutMe from "../components/AboutMe.jsx";
import HobbySelection from "../components/HobbySelection.jsx";
import GenderSelection from "../components/GenderSelection.jsx";
import LanguageSelection from "../components/LanguageSelection.jsx";
import { useState } from "react";
import { db } from "../firebase"
import { getAuth}  from "firebase/auth"
import { getFirestore, doc, updateDoc } from 'firebase/firestore';



const textFieldStyle = {
  backgroundColor: "white",
};

export default function UserInfoPage() {
  // const navigate = useNavigate();
  const GlobalStyle = createGlobalStyle`
    html {
      overflow: auto;
    }
  `;
    // State variables to hold user input
    const [selectedFile, setSelectedFile] = useState(null);
    const [age, setAge] = useState("");
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [gender, setGender] = useState("");
    const [aboutText, setAboutText] = useState('');
    const [stars, setStars] = useState(5); // Default value of 5 stars

    const navigate = useNavigate();

  
    // Function to handle form submission
    const handleSubmit = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const userRef = doc(db, 'users', "user_"+user.uid);
        console.log("Document ref is updated with UID: ", user.uid);


         // Update the fields of the user document
         await updateDoc(userRef, {
          profilePictureUrl: selectedFile.downloadURL,
          age,
          selectedHobbies,
          selectedLanguages,
          gender,
          aboutText,
          stars,
        });
  
        console.log("Document updated succefully with UID: ", userRef.uid);
  
        // Navigate to "/details" after successful submission
        navigate("/details");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    };

  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs" sx={{ paddingBottom: 8, overflowY: "scroll" }}>
        <GlobalStyle />
        <Box sx={{ pt: 10, margin: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{ pt: 10, margin: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProfilePictureUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AgeSelection age={age} setAge={setAge} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HobbySelection selectedHobbies={selectedHobbies} setSelectedHobbies={setSelectedHobbies}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LanguageSelection selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GenderSelection gender={gender} setGender={setGender} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AboutMe aboutText={aboutText} setAboutText={setAboutText}/>
            </Grid>
          </Grid>
          <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
        </Box>
      </Container>
    </>
  );
}