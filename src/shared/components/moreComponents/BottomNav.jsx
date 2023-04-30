import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const changePage = (event, newValue) => {
        console.log(value);
        setValue(newValue);    
  }


  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

        <Box sx={{ width: '100%', bgcolor: 'red' }}>
        <BottomNavigation
            
            value={value}
            onChange={changePage}
            
        >
            <BottomNavigationAction label="Circles" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </Box>
    </Paper>

  );
}