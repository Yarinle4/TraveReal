import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; // Assuming Firestore is being used

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import "../pages/HomePageHost/homeHost.css";
import { auth, db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import signUpLogo from "../assets/signUpLogo.svg"

const textFieldStyle = {
  backgroundColor: "white",
};

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signUp } = UserAuth();
  const { addToUserdb } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");

      // Create a new user document
      const userDoc = {
        firstName,
        lastName,
        country,
        email,
      };

      // Add the user document to the "users" collection

      await signUp(email, password);
      await addToUserdb(userDoc);

      // const docRef = await addDoc(collection(db, "users"), userDoc);

      // console.log("User document added with ID: ", docRef.id);

      navigate("/UserInfoPage");
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/weak-password") {
        setError("Password should be at least 6 characters");
      }
      if (e.code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (e.code === "auth/missing-password") {
        setError("Missing password");
      }
      if (e.code === "auth/email-already-in-use") {
        setError("Email already in use");
      }
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ mt: 10, bgcolor: "#f3fbf4" }}>
            <img src={signUpLogo} style={{maxWidth: '100%'}}/>
            </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {error && (
              <Alert
                severity="error"
                sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
              >
                {error}
              </Alert>
            )}
          </Stack>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  style={textFieldStyle}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  style={textFieldStyle}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  style={textFieldStyle}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  style={textFieldStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  style={textFieldStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
