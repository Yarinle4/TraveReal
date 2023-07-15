import React, { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase Authentication

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import { db } from "../firebase";
import signUpLogo from "../assets/signUpLogo.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const textFieldStyle = {
  backgroundColor: "white",
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");

      // Sign in the user using Firebase Authentication
      await signIn(email, password);
      console.log("Signed in successfully");

      // Navigate to the next page
      navigate("/HomePage");
      console.log("test");
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (
        e.code === "auth/wrong-password" ||
        e.code === "auth/missing-password"
      ) {
        setError("Invalid password");
      }
      if (e.code === "auth/user-not-found") {
        setError("User not found");
      }
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs">
        {/* Rest of the component code */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ mt: 10, bgcolor: "#f3fbf4" }}>
            <img src={signUpLogo} style={{ maxWidth: "100%" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
                  autoComplete="current-password"
                  style={textFieldStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
