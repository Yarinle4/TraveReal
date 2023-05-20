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


const textFieldStyle = {
  backgroundColor: "white",
};

export default function UserInfoPage() {
  const GlobalStyle = createGlobalStyle`
    html {
      overflow: auto;
    }
  `;

  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs" sx={{ paddingBottom: 8, overflowY: "scroll" }}>
        <GlobalStyle />
        <Box sx={{ pt: 10, margin: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{ pt: 10, margin: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProfilePictureUpload />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AgeSelection />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HobbySelection />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LanguageSelection/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GenderSelection />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AboutMe />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
