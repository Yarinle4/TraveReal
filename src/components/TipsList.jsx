import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppleIcon from '@mui/icons-material/Apple';
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import app3 from "../assets/app3.png";
import app4 from "../assets/app4.png";

const apps = [
  { image: app1, 
    title: "Easy", 
    description: "find everything around you!" 
  },
  {
    image: app2,
    title: "Rav Kav",
    description: "the Israeli public transport smart card, from anywhere, anytime",
  },
  {
    image: app3,
    title: "Yeroshamaim",
    description: "Jerusalem weather station",
  },
  {
    image: app4,
    title: "Moovit",
    description: "All Transit Options Bus, Train, Subway Live Times ",
  },
];

const generateCards = (apps) => {
  return apps.map((app) => (
    <Card key={app.title} sx={{ maxwidth: 10, marginBottom: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={app.image}
        alt={app.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {app.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {app.description}
        </Typography>
      </CardContent>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AppleIcon fontSize="medium" />
        </div> */}
    </Card>
  ));
};

const useStyles = makeStyles({
  pictureRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
    "& > *": {
      flexBasis: "calc(50% - 10px)",
    },
    "@media (max-width: 200px)": {
      flexDirection: "column",
      "& > *": {
        flexBasis: "100%",
      },
    },
  },
});



const TipsList = ({ curCircle }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{ mt: 8, mb: 5, width: "100%" }}>
    <IconButton
        aria-label="Back"
        size="large"
        onClick={() =>
          navigate("/activities", { state: { curCircle } })
        }
        sx={{
          top: -23,
          left: 0,
          display: "flex",
          position: "absolute",
          mt: 10,
        }}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
      <Box
        sx={{
          mt: 7,
          fontSize: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#679E84",
        }}
      >
        Useful Apps
      </Box>
      <Box
          sx={{
            mt: 1,
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#679E84",
            ml: 2,
            mr: 2,
          }}
        >Navigate your destination like a local with a handpicked selection of essential apps!
        </Box>
        <Box sx={{ mt: 3 }} className={classes.pictureRow}>
        {generateCards(apps)}
      </Box>
      </Box>
    </>
  );
};

export default TipsList;
