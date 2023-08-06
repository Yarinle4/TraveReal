import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import signUpLogo from "../assets/signUpLogo.svg";

const textFieldStyle = {
  backgroundColor: "white",
};

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { resetPassword } = UserAuth(); // Access the resetPassword function from the context
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");
      await resetPassword(email); // Call the resetPassword function
      setIsEmailSent(true);
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/invalid-email") {
        setError("Invalid email");
      } else if (e.code === "auth/user-not-found") {
        setError("User not found");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <>
      <ResponsiveAppBar />

      <Container component="main" maxWidth="xs">
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
            Forgot Password
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
            {isEmailSent && (
              <Alert
                severity="success"
                sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
              >
                Password reset email sent! Please check your inbox.
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate("/SignIn")}
                >
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
