import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import * as React from "react";
import { useState, useEffect } from "react";

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

const BigList = () => {
  const [value, setValue] = React.useState(4);

  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon sx={{ fontSize: "40px" }}>
          <StarIcon sx={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText
          primary="You earned 15 stars"
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
        <Rating
          name="read-only"
          value={value}
          readOnly
          sx={RatingcustomStyle}
        />
      </ListItem>
    </List>
  );
};

function HomePage() {
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />
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
          <BigList />
        </Box>
        <SimpleBottomNavigation />
      </Box>
    </>
  );
}

export default HomePage;
