import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

//circle:
import beer from '../assets/beer.jpg';
import history from '../assets/history.png';
import architecture from '../assets/architecture.png';
import food from '../assets/food.png';
import hiking from '../assets/hiking.png';
import sharedWorkspace from '../assets/sharedWorkspace.jpg';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const images = [
  {
    url: beer,
    title: 'Bonding Circle',
    width: '40%',
  },
  {
    url: history,
    title: 'History Circle',
    width: '30%',
  },
  {
    url: architecture,
    title: 'Architecture Circle',
    width: '30%',
  },
  {
    url: food,
    title: 'Culinary Circle',
    width: '30%',
  },
  // {
  //   url: hiking,
  //   title: 'Hiking Circle',
  //   width: '30%',
  // },
  {
    url: sharedWorkspace,
    title: 'Digital Nomads Circle',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases(props) {

      const handleCircleSelect = async (circleTitle) => {
        if (props.circle === circleTitle) {
          // If the selected circle is already the current circle, no action needed
          return;
        }
      
        try {
          const auth = getAuth();
          const user = auth.currentUser;
          const uid = user ? user.uid : "a";
          const userRef = doc(db, 'users', "user_" + uid);
      
          // Clear the 'circle' field of the user document
          await updateDoc(userRef, {
            circle: ""
          });
      
          // Update the 'circle' field with the new value
          await updateDoc(userRef, {
            circle: circleTitle
          });
      
          props.setCircle(circleTitle);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            opacity: props.circle === image.title ? 0.5 : 1, // Reduce opacity for selected circles
          }}
          onClick={() => handleCircleSelect(image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              {props.circle === image.title && <ImageMarked className="MuiImageMarked-root" />}
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}