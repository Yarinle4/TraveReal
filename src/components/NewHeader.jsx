import React from 'react'
import BasicRating from './BasicRating'
import Stack from '@mui/joy/Stack';
import ImageAvatars from './Avatar'
import './NewHeader.css';
import QuiltedImageList from './QuiltedImageList'
import Button from '@mui/material/Button';

const NewHeader = () => {
  return (
    <div class="EventHeader">
    <Stack direction="row" spacing={60}>
        <ImageAvatars/>
        <BasicRating />
    </Stack>
    <div class="EventBody">
        <h1>DATES & TIMES</h1>
            <li>date</li>
            <li>time</li>
            <li>location</li>
            <li>requests</li>
        <h1>About</h1>
        <p>Details about the event</p>
    </div>
    <QuiltedImageList />
    <Button variant="contained" color="success">
    Join Now!
    </Button>
    </div>
  )
}

export default NewHeader