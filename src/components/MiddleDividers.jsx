import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import QuiltedImageList from "./QuiltedImageList";

export default function MiddleDividers() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Typography
              gutterBottom
              variant="h4"
            >
              Details
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "4vw" }}>
          One of the most famous markets in Jerusalem is Mahane Yehuda, located
          in the heart of the city.
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Divider variant="middle" />
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Photos
            </Typography>
          </Grid>
          <Grid item>
            <QuiltedImageList />
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Circles
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="History Circle" />
          <Chip color="primary" label="Culinary Circle" />
          <Chip color="primary" label="Love Circle" />
          <Chip label="Bonding Circle" />
        </Stack>
      </Box>
    </Box>
  );
}
