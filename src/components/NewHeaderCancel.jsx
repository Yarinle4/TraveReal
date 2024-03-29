import React, { useState, useEffect } from "react";
import { doc, getFirestore, getDoc, onSnapshot } from "firebase/firestore";
import BasicRating from "./BasicRating";
import Stack from "@mui/joy/Stack";
import "./NewHeader.css";
import QuiltedImageList from "./QuiltedImageList";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MiddleDividers from "./MiddleDividers";
import SimpleMap from "./SimpleMap";
import "leaflet/dist/leaflet.css";
import Box from "@mui/material/Box";
import AlertDialogSlideCancel from "./PopUpDialogCancel";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { db } from "../firebase";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const lat = 123;
const lng = 230;
const mapLocation = [lat, lng];

const NewHeaderCancel = ({ eventData, curCircle, curCity, isHost }) => {
  const [profilePic, setProfilePic] = useState("");
  const [hostName, setHostName] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("event host uid:", eventData.host);
    const fetchHostProfilePic = async () => {
      const db = getFirestore();
      const docRef = doc(db, "users", "user_" + eventData.host);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userProfile = docSnap.data();
        setProfilePic(userProfile.profilePictureUrl);
        setHostName(userProfile.firstName);

        const userRatingArray = userProfile.rating;
        // Calculate the average
        const sum = userRatingArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const average = sum / userRatingArray.length;
        setRating(average);
      } else {
        console.log("No such document!");
      }
    };

    fetchHostProfilePic();
  }, [eventData.host]);

  return (
    <Box sx={{ mb: 5, width: "100%" }}>
      <IconButton
        aria-label="Back"
        size="large"
        onClick={() => navigate("/MyEvents", { state: { curCircle, curCity } })}
        sx={{
          top: -23,
          left: 0,
          display: "flex",
          position: "absolute",
          mt: 10,
        }}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
      <Box sx={{ my: 3, mx: 2 }}>
        <div class="EventHeader">
          <Stack direction="row" spacing={3} sx={{ mt: 8 }}>
            <Avatar src={profilePic} sx={{ width: 70, height: 70 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {eventData.title}
              </Typography>
            </Box>
          </Stack>
          <div class="EventBody">
            <MiddleDividers
              time={eventData.time}
              name={eventData.name}
              details={eventData.details}
              photos={eventData.photos}
              circles={eventData.circles}
              location={eventData.location}
              hostName={hostName}
              rating={rating}
            />
          </div>
          <Box sx={{ my: 3, mx: 2 }}>
            <Card>
              <SimpleMap city={eventData.mapLocation} />
            </Card>
            <Box sx={{ my: 3, mx: 2 }}></Box>
            {!isHost && <AlertDialogSlideCancel eventID={eventData.eventID} />}
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default NewHeaderCancel;
