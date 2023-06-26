import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

export default function SimpleBottomNavigation() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);

  const navigate = useNavigate();

  const changePage = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: -5, left: 0, right: 0, zIndex: 10 }}
      elevation={3}
    >
      <Box sx={{ width: "100%", bgcolor: "red" }}>
        <BottomNavigation showLabels value={value} onChange={changePage}>
          <BottomNavigationAction
            value="/ProfilePage"
            label="Profile Page"
            icon={<PersonIcon style={{ fontSize: 32 }} />}
          />
          <BottomNavigationAction
            value="/HomePage"
            label="Home"
            icon={<HomeIcon style={{ fontSize: 32 }} />}
          />
          <BottomNavigationAction
            value="/MyEvents"
            label="My Events"
            icon={<EventIcon style={{ fontSize: 32 }} />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}
