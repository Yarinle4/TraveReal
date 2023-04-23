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

const lat = 123;
const lng = 230;
const mapLocation =  [lat, lng];

const NewHeader = () => {
  return (
    <div className="EventHeader">
      <Card>
        {/* <div class="EventHeader"> */}
        <Stack direction="row" spacing={60}>
            <ImageAvatars/>
            <BasicRating />
        </Stack>
      {/* </div> */}
      </Card>
    <div className="EventBody">
        <MiddleDividers />
    </div>
    </div>
  )
}

export default NewHeader