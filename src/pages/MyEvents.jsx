import React from "react";
import Header from "../components/ComminityHeader.jsx";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar.jsx";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import PostFeed from "../components/PostFeed.jsx";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav.jsx";
import Button from "@mui/material/Button";



function MyEvents() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => navigate("/UpcomingEvent")}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Upcoming Events
      </Button>
      <Button
        onClick={() => navigate("/PrevEvent")}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Previous events
      </Button>

      <SimpleBottomNavigation />

    </div>
  );
}
export default MyEvents;
