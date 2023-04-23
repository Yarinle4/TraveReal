import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import QuiltedImageList from './QuiltedImageList'

export default function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Details
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
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
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Circles
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Circle1" />
          <Chip color="primary" label="Circle2" />
          <Chip color="primary" label="Circle3" />
          <Chip label="Circle4" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button variant="contained" color="success">
        Join Now!
        </Button>
      </Box>
    </Box>
  );
}