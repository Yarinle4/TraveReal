import React from "react";
import BasicRating from "./BasicRating";
import Stack from "@mui/joy/Stack";
import ImageAvatars from "./Avatar";
import "./NewHeader.css";
import QuiltedImageList from "./QuiltedImageList";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MiddleDividers from "./MiddleDividers";
import SimpleMap from "./SimpleMap";
import "leaflet/dist/leaflet.css";
import Box from "@mui/material/Box";
import AlertDialogSlide from "./PopUpDialog";

const lat = 123;
const lng = 230;
const mapLocation = [lat, lng];

const NewHeader = ({ eventData }) => {
  return (
    <Box sx={{ width: "100%"}}>
      <Box sx={{ my: 3, mx: 2 }}>
        <div class="EventHeader">
          {/* <div class="EventHeader"> */}
          <Stack direction="row" spacing={3} sx={{ mt: 8 }}>
            <ImageAvatars />
            <h2>{eventData.title}</h2>
            <BasicRating rating={eventData.rating}/>
          </Stack>
          {/* </div> */}
          <div class="EventBody">
            <MiddleDividers 
              time = {eventData.time}
              name = {eventData.name}
              details={eventData.details}
              photos={eventData.photos}
              circles={eventData.circles}
              location={eventData.location}
            />
          </div>
          <Box sx={{ my: 3, mx: 2 }}>
            <Card>
              <SimpleMap location={eventData.mapLocation}/>
            </Card>
            <Box sx={{ my: 3, mx: 2 }}></Box>

            <AlertDialogSlide />
          </Box>
        </div>
      </Box>
    </Box>
  );
};


export default NewHeader;
