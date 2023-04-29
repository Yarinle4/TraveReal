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
import AlertDialogSlide from './PopUpDialog'

const lat = 123;
const lng = 230;
const mapLocation =  [lat, lng];


const NewHeader = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <Box sx={{ my: 3, mx: 2 }}>
    <div class="EventHeader">
        {/* <div class="EventHeader"> */}
        <Stack direction="row" spacing={3}>
            <ImageAvatars/>
            <h2>Event_Name</h2>
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
    <Box sx={{ my: 3, mx: 2 }}></Box>
    <AlertDialogSlide />
    </Box>
    </div>
    </Box>
    </Box>
  )
}

export default NewHeader