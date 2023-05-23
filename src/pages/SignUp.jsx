import * as React from "react";
import { useState, useEffect } from "react";
// import Map from "../assets/photoMap.jpg" sx={{backgroundImage: `url(${Map})`}};
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

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import "../pages/HomePageHost/homeHost.css";
import { useNavigate  } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const textFieldStyle = {
  backgroundColor: "white",
};


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signUp } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("111" + email + " " + password);

      setError("");
      await signUp(email, password);
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

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // try{
    //   const user_details = {
    //     first_name : data.get("firstName"),
    //     last_name : data.get("lastName"),
    //   }
    //   await createUser(data.get('email'), data.get('password'))
    //   await addToUserdb(user_details)
    //   navigate('/home')
    // }catch(e){
    //   console.log(e.message)
    //   setError(e.message)
    // }
  };

  const Image = {
    url: Map,
    opacity: 0.5,
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
          <Avatar sx={{ mt: 10, mb: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
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