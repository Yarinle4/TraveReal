import ImageAvatars from "../components/Avatar";
import Header from "../components/EventHeader";
import NewHeader from "../components/NewHeader";
import ECommerce from "../components/ProfilePage";
// import { Basic } from '../components/Profile'
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import styled from "styled-components";
import { Box } from "@mui/system";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";

function Event() {
  return (
    <>
      <ResponsiveAppBar position="fixed" />
        <NewHeader />
      <SimpleBottomNavigation />
    </>
  );
}

export default Event;
