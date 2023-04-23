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
          <Grid item>
          <Typography gutterBottom variant="h4" component="div">
              Details
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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