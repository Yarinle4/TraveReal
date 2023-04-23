import React from 'react'
import BasicRating from './BasicRating'
import Stack from '@mui/joy/Stack';
import ImageAvatars from './Avatar'
import './NewHeader.css';
import QuiltedImageList from './QuiltedImageList'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import MiddleDividers from './MiddleDividers'
import SimpleMap from'./SimpleMap'
import "leaflet/dist/leaflet.css"
import Box from '@mui/material/Box';

const lat = 123;
const lng = 230;
const mapLocation =  [lat, lng];


const NewHeader = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <Box sx={{ my: 3, mx: 2 }}>
    <div class="EventHeader">
        {/* <div class="EventHeader"> */}
        <Stack direction="row" spacing={10}>
            <ImageAvatars/>
            <h1>Event_Name</h1>
            <BasicRating />
        </Stack>
      {/* </div> */}
    <div class="EventBody">
        <MiddleDividers />
    </div>
    <Box sx={{ my: 3, mx: 2 }}>
    <Card>
      <SimpleMap />
    </Card>
    </Box>
    </div>
    </Box>
    </Box>
  )
}

export default NewHeader