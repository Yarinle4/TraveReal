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
import MDA from "../assets/MDA.png";
import Firefighters from "../assets/Firefighters.jpg";
import police from "../assets/Police.png";
import HFC from "../assets/HFC.png";
import PhoneIcon from "@mui/icons-material/Phone";

const apps = [
  {
    image: MDA,
    title: "MDA",
    description: "Emergency Medical Services",
    phone: "101",
  },
  {
    image: police,
    title: "Police",
    description: "Police Services",
    phone: "100",
  },
  {
    image: Firefighters,
    title: "Firefighters",
    description: "Firefighting and Rescuing",
    phone: "102",
  },
  {
    image: HFC,
    title: "HFC",
    description: "Updates for all emergency scenarios",
    phone: "104",
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
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography variant="h6" color="text.secondary">
            {app.phone}
          </Typography>
        </Box>
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

const EmergencyAssistanceList = ({ curCircle, curCity }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ mt: 8, mb: 5, width: "100%" }}>
        <IconButton
          aria-label="Back"
          size="large"
          onClick={() =>
            navigate("/activities", { state: { curCircle, curCity } })
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
            fontSize: 27,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#679E84",
          }}
        >
          Emergency Assistance
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
        >
          Be prepared for any situation with safety tips, emergency contacts,
          and real-time alerts
        </Box>
        <Box sx={{ mt: 3 }} className={classes.pictureRow}>
          {generateCards(apps)}
        </Box>
      </Box>
    </>
  );
};

export default EmergencyAssistanceList;
