import React from "react";
import Header from "../components/ComminityHeader.jsx";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CommunityPage() {
  return (
    <div>
      <ResponsiveAppBar position="fixed" />

      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          my: 1,
          mx: 1,
          mt: 7,
        }}
      >
        {" "}
        Community
      </Box>
      <Box sx={{ textAlign: "center", fontSize: 25, my: 2, mx: 1, mt: 1 }}>
        {" "}
        This is where we share our experience!
      </Box>
      <Box sx={{ my: 3, mx: 2, mt: 4 }}></Box>
      <Box>
        <PostFeed/>
      </Box>

      <Box sx={{ my: 3, mx: 2, mt: 6 }}></Box>
      <SimpleBottomNavigation />
    </div>
  );
}
export default CommunityPage;
