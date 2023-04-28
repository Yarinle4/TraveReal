import React from "react";
import PostComponent from "../components/PostComponent";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
      <NestedGrid></NestedGrid>
    </div>
  );
}
export default CommunityPage;
