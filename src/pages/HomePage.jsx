import { Link } from "react-router-dom";

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar"
import BackgroundImagePage from "../components/bgImg"
import imgg from "../assets/newewew.png"
import styled from 'styled-components';

import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";


import CirclePage from "../components/CirclePage";
import FloatingActionButtons from "../components/AddButton";
import { Box } from "@mui/system";
import AlertButton from "../components/AlartButton";
import DraggableDialog from "../components/AlertPopUp";


const Headline = styled.div`
font-size: 20px; /* Adjust the font size as desired */
  font-weight: bold; /* Add or remove as desired */
  color: #FFFFFF; /* Choose a color that matches your design */
  text-align: center; /* Align the headline to center, or adjust as desired */
  text-transform: uppercase; /* Capitalize the headline, or change to desired text transformation */
  margin: 5; /* Remove any margin to fit seamlessly into your design */
  padding: 80px; /* Add padding as desired */
  border: none; /* Remove any border or customize as needed */
  border-radius: 1px; /* Add rounded corners, or remove if not needed */
`;

const PageWrapper = styled.div`
 
  width: 100%;
  height: 100%;
  background-color: #FAEBD7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1; /* Update the z-index to a higher value */
`;


const WelcomeImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  margin: auto;
  margin-top: 50px; /* add margin-top */
  background-image: url(${imgg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;


const CircleWrapper = styled.div`
  display: flex;

`;



function HomePage() {
    return (
      
        <PageWrapper>


        <ResponsiveAppBar position="fixed"/>

        {/* <WelcomeImg>
          <Headline>
            WELCOME TO TRAVEREAL
          </Headline>
        </WelcomeImg> */}

        
        <FloatingActionButtons />
        <DraggableDialog/>

      <CircleWrapper>
        <CirclePage/>
      </CircleWrapper>
      <SimpleBottomNavigation />

      


        <h1>Welcome to My Website</h1>
        <p>Thanks for visiting! Here's some information about what we do:</p>
        <ul>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/EventPage">Event Page</Link></li>
          <li><Link to="/EventPageHost">Host Page</Link></li>
          <li><Link to="/ProfilePage">Profile Page</Link></li>

          <li><Link to="/HomePageHost">Home Page Host</Link></li>
          <li><Link to="/CommunityPage">Community Page</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/CreateNewEvent">CreateNewEvent</Link></li>





          <li>We provide high-quality products and services.</li>
          <li>We have a team of experienced professionals.</li>
          <li>We're dedicated to customer satisfaction.</li>
        </ul>
        <p>Feel free to browse our site and learn more about us.</p>
       </PageWrapper>
    );
  }
  
  export default HomePage;