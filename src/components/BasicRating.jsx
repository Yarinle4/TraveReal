import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
      <Stack>

      <Typography component="legend">Add your rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
    
        </Stack>
  );
}
