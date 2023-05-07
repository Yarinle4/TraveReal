import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import app3 from "../assets/app3.png";
import app4 from "../assets/app4.png";

const apps = [
  { image: app1, title: "Easy", description: "find everything around you!" },
  {
    image: app2,
    title: "Rav Kav",
    description:
      "the Israeli public transport smart card, from anywhere, anytime, using your credit card.",
  },
  {
    image: app3,
    title: "Yeroshamaim",
    description: "Jerusalem weather station",
  },
  {
    image: app4,
    title: "Movit",
    description: "All Transit Options Bus, Train, Subway Live Times ",
  },
];

const generateCards = (apps) => {
  return apps.map((app) => (
    <Card key={app.title} sx={{ maxwidth: 10, marginBottom: "20px" }}>
      <CardMedia
        component="img"
        height="130"
        image={app.image}
        alt={app.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {app.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {app.description}
        </Typography>
      </CardContent>
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

const TipsList = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          my: 1,
          mx: 1,
          mt: 7,
        }}
      >
        Useful Apps!
      </Box>
      <Box sx={{ mt: 12 }} className={classes.pictureRow}>
        {generateCards(apps)}
      </Box>
    </>
  );
};

export default TipsList;
