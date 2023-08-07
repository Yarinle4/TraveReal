import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import QuiltedImageList from "./QuiltedImageList";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const RatingcustomStyle = {
  "& .MuiRating-iconFilled": {
    color: "#FFFF00",
    fontSize: "20px",
  },
  "& .MuiRating-iconEmpty": {
    fontSize: "20px",
  },
  "& .MuiRating-iconHover": {
    color: "purple",
  },
  "& .MuiRating-decimal:hover": {
    transform: "scale(2.5)",
  },
};

export default function MiddleDividers({
  time,
  name,
  details,
  photos,
  circles,
  location,
  hostName,
  rating,
  participants,
}) {
  console.log("hostName:", hostName);
  console.log("r:", rating);
  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              sx={RatingcustomStyle}
            />
            <Typography gutterBottom variant="h4">
              Host:
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "3vw" }}>{hostName}</Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h4">
              Details
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "3vw" }}>{details}</Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h4">
              Participants
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "3vw" }}>{participants}</Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {/* Photos */}
            </Typography>
          </Grid>
          <Grid item>{/* <QuiltedImageList photos={photos}/> */}</Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Circles
        </Typography>
        <Stack direction="row" spacing={1}>
          {circles.map((circle) => (
            <Chip label={circle} />
          ))}
        </Stack>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Time: {time}
        </Typography>
        <Stack direction="row" spacing={1}></Stack>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ ml: 2, mt: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Location
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {location}
        </Typography>
      </Box>
    </Box>
  );
}
