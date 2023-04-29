import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function PostComponent(image1){

  return (
    
    <Card   sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 200 }}
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPqW28MwU003YObzi-U_j-hg3vh6KtLlCvA&usqp=CAU"
        title="Fun time with new friends"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          A beautifull sunset at the knesset
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "This is where we tell you how much fun it was"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share!</Button>
        <Button size="small">Find out more</Button>
      </CardActions>
    </Card>
  );
}
  
