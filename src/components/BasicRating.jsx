import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
      // <Stack>
      <div>
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={value} readOnly />
      </div>

      // </Stack>
  );
}
