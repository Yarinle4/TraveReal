import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from "react-router-dom";


export default function FloatingActionButtons() {
    const navigate = useNavigate(); 

    
  return (
      <Fab color="primary"
            aria-label="add"
            onClick={() => navigate("/EventPage")}
            sx={{  position: 'fixed',
                                      bottom: '10%',
                                      right: '5%'}} 
      >
        <AddIcon />
      </Fab>
      
  );
}
