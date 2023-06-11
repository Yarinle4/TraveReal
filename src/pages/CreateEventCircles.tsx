import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import "../pages/HomePageHost/homeHost.css";
import { useNavigate } from "react-router-dom";
import CircleSelection from "../components/SelectCircle";

export default function SelectCircle() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            fontSize={20}
            sx={{ mt: 2, mb: 1, fontWeight: "20px" }}
          >
            Choose a circle that fits your event
          </Typography>
          <Typography component="h1" fontSize={13}>
            Currently, you can only select one circle
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}></Grid>
            <CircleSelection />
            <Button
              onClick={() => navigate("/HomePage")}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
