import React from "react";
import PostComponent from "../components/PostComponent";
import Header from "../components/ComminityHeader.jsx";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item><PostComponent/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><PostComponent/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><PostComponent/></Item>
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
      <h1 > Community</h1>
      <h2 >Hello World</h2>
      <div>
      <NestedGrid></NestedGrid>
     </div>
    </div>
  );
}
export default CommunityPage;

