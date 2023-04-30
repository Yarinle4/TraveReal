import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';


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
            <BottomNavigationAction label="Activities" icon={<SportsHandballIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Community" icon={<GroupIcon />} />
        </BottomNavigation>
        </Box>
    </Paper>

  );
}