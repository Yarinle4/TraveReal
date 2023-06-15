import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import * as React from "react";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import styled from "styled-components";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";
import CirclePage from "../components/CirclePage";
import FloatingActionButtons from "../components/AddButton";
import { Box } from "@mui/system";
import DraggableDialog from "../components/AlertPopUp";
import Rating from "@mui/material/Rating";
import { FcRating } from "react-icons/fc";
import { createGlobalStyle } from "styled-components";
import HomePageLogo from "../assets/HomePageLogo.png";

const CoinIcon = styled(FcRating)`
  font-size: 20px;
  margin-right: 2px;
`;

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;

const RatingcustomStyle = {
  "& .MuiRating-iconFilled": {
    color: "#FFFF00",
  },
  "& .MuiRating-iconHover": {
    color: "purple",
  },
  "& .MuiRating-decimal:hover": {
    transform: "scale(2.5)",
  },
};

const BigList = ({ stars }) => (
  <List>
    <ListItem disablePadding>
      <ListItemIcon sx={{ fontSize: "40px" }}>
        <StarIcon sx={{ fontSize: "30px" }} />
      </ListItemIcon>
      <ListItemText
        primary={`You earned ${stars} stars`}
        primaryTypographyProps={{
          fontSize: "16px",
          fontFamily: "Montserrat",
        }}
      />{" "}
      <CoinIcon />
    </ListItem>
    <ListItem disablePadding>
      <ListItemIcon sx={{ fontSize: "40px" }}>
        <StarIcon sx={{ fontSize: "30px" }} />
      </ListItemIcon>
      <ListItemText
        primary="Your Rating"
        primaryTypographyProps={{
          fontSize: "16px",
          fontFamily: "Montserrat",
        }}
      />
      <Rating name="read-only" value={4} readOnly sx={RatingcustomStyle} />
    </ListItem>
  </List>
);

function HomePage() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const loadStars = async () => {
      let userRef;

      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user ? user.uid : "";
        userRef = doc(db, "users", "user_" + uid);

        const unsubscribe = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const userStars = doc.data().stars;
            const parsedStars = parseInt(userStars);
            setStars(parsedStars);
            localStorage.setItem("stars", parsedStars.toString());
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error(error);
      }
    };

    try {
      const storedStars = localStorage.getItem("stars");
      const trimmedStars = storedStars ? storedStars.trim() : "";

      if (trimmedStars && !Number.isNaN(parseInt(trimmedStars))) {
        setStars(parseInt(trimmedStars));
      } else {
        setStars(0);
      }

      loadStars(); // Fetch the stars value on every page load
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ResponsiveAppBar position="fixed" />
      <Box sx={{ flex: "1 1 auto" }}>
        <Box
          sx={{
            mt: 8,
            fontSize: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: '#679E84'
          }}
        >
          Welcome to TraveReal!
        </Box>
        <Box
          sx={{
            mt: 1,
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: '#679E84'
          }}
        >
          Join a circle and start your journey
        </Box>        
        <FloatingActionButtons />
        <DraggableDialog />
        <Box>
          <CirclePage stars={stars} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "6%",
            width: "67%",
            padding: "10px",
            borderRadius: "25px",
            bgcolor: "#84A98C ",
            color: "white",
          }}
        >
          <BigList stars={stars} />
        </Box>
        <SimpleBottomNavigation />
      </Box>
    </>
  );
}

export default HomePage;
