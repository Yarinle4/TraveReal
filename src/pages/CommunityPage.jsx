import React from "react";
import PostComponent from "../components/PostComponent";
import Header from "../components/ComminityHeader.jsx";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Post from "../components/Post.jsx"




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function FormRow(props) {
  return (
    <React.Fragment>
      <Grid item xs={4}>
      <Post ></Post>
      </Grid>
      <Grid item xs={4}>
      <Post/>
      </Grid>
      <Grid item xs={4}>
      <Post/>
      </Grid>
    </React.Fragment>
  );
}
function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
        <FormRow> </FormRow>
        </Grid>
        <Grid container item spacing={3}>
        <FormRow></FormRow>
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

function CommunityPage() {
  return (
    <div>
      
      <ResponsiveAppBar position="fixed"/>
      <Box sx={{ my: 3, mx: 2, mt:10 }}>
      <Box  sx={{textAlign: 'center',fontWeight: 'bold', fontSize: 40 , my: 3, mx: 2, mt:10 }}> Community</Box>
      <Box  sx={{textAlign: 'center', fontSize: 25 , my: 3, mx: 1, mt:5 }}> This is where we share our experience!</Box>
      <div>
      <Box sx={{ my: 3, mx: 2, mt:10 }}> </Box>
      </div>
      <div>
      <NestedGrid></NestedGrid>
     </div>
     </Box>
    </div>
  );
}
export default CommunityPage;

