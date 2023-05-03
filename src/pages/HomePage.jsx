import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import imgg from "../assets/newewew.png";
import styled from "styled-components";

import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";

import CirclePage from "../components/CirclePage";
import FloatingActionButtons from "../components/AddButton";
import { Box } from "@mui/system";
import AlertButton from "../components/AlartButton";
import DraggableDialog from "../components/AlertPopUp";

const Headline = styled.div`
  font-size: 20px; /* Adjust the font size as desired */
  font-weight: bold; /* Add or remove as desired */
  color: #ffffff; /* Choose a color that matches your design */
  text-align: center; /* Align the headline to center, or adjust as desired */
  text-transform: uppercase; /* Capitalize the headline, or change to desired text transformation */
  margin: 5; /* Remove any margin to fit seamlessly into your design */
  padding: 80px; /* Add padding as desired */
  border: none; /* Remove any border or customize as needed */
  border-radius: 1px; /* Add rounded corners, or remove if not needed */
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #faebd7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1; /* Update the z-index to a higher value */
`;

const WelcomeImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  margin: auto;
  margin-top: 50px; /* add margin-top */
  background-image: url(${imgg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

const BgCol = styled.div`
backgroundColor: '#B1D8B7',
minHeight: '100vh', // Set the minimum height of the box to the height of the viewport
display: 'flex',
flexDirection: 'column', // Add a flex column layout
`;

const CircleWrapper = styled.div`
  display: flex;
`;

function HomePage() {
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <>
      <ResponsiveAppBar position="fixed" />
      <Box sx={{ flex: "1 1 auto" }}>
        <Box
          sx={{
            mt: 8,
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Welcome!
        </Box>
        <FloatingActionButtons />
        <DraggableDialog />
        <Box sx={{ mt: 2 }}>
          <CirclePage />
        </Box>
        {/* <Box sx={{ display: "flex" }}>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </Box> */}
      </Box>
      <SimpleBottomNavigation />
    </>
  );
}

export default HomePage;
