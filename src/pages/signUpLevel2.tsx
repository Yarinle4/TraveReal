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
import CircleSelection from "../components/SelectCircle2";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../firebase"

export default function SignUp() {
  const [circle, setCircle] = useState([]);

  const navigate = useNavigate();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("entered handlesubmit");
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user ? user.uid : "a";
      const userRef = doc(db, 'users', "user_"+uid);
      console.log("Document ref is updated with UID: ", uid);

       // Update the fields of the user document
       await updateDoc(userRef, {
        // selectedFile,
        circle
      });

      console.log("Document updated succefully with UID: ", uid);
  
      // Navigate to "/details" after successful submission
      navigate("/HomePage");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };



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
            Choose a circle that interests you
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
            <Grid container spacing={2}>
            <CircleSelection circle={circle} setCircle={setCircle} />
            </Grid>
            
            <Button
              onClick={() => {handleSubmit}}
              type="submit"
              fullWidth
              variant="contained"
              // onSubmit={handleSubmit}
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
