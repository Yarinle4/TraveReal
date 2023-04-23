import { Link } from "react-router-dom";

import ResponsiveAppBar from "../shared/components/moreComponents/MainBar"
import BackgroundImagePage from "../components/bgImg"
import imgg from "../assets/newewew.png"
import styled from 'styled-components';
import CirclePage from "./CirclePage";


const Headline = styled.div`
font-size: 36px; /* Adjust the font size as desired */
  font-weight: bold; /* Add or remove as desired */
  color: #000; /* Choose a color that matches your design */
  text-align: center; /* Align the headline to center, or adjust as desired */
  text-transform: uppercase; /* Capitalize the headline, or change to desired text transformation */
  margin: 0; /* Remove any margin to fit seamlessly into your design */
  padding: 5px; /* Add padding as desired */
  border: none; /* Remove any border or customize as needed */
  border-radius: 1px; /* Add rounded corners, or remove if not needed */
  /* Add any other styles, such as shadow or hover effects, as desired */
`;

const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imgg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1; /* Update the z-index to a higher value */
`;



function HomePage() {
    return (
      <PageWrapper>
      <ResponsiveAppBar/>

      <Headline>
      WELCOME TO TRAVEREAL
    </Headline>
    <CirclePage/>


        <h1>Welcome to My Website</h1>
        <p>Thanks for visiting! Here's some information about what we do:</p>
        <ul>
          <li><Link to="/SignUp">SIgn Up</Link></li>
          <li><Link to="/CirclePage">Circle Page</Link></li>
          <li><Link to="/EventPage">Event Page</Link></li>
          <li><Link to="/EventPageHost">Host Page</Link></li>
          <li><Link to="/SlidingCardPage">Sliding Card Page</Link></li>
          <li><Link to="/ActivityPage">Activity Page</Link></li>





          <li>We provide high-quality products and services.</li>
          <li>We have a team of experienced professionals.</li>
          <li>We're dedicated to customer satisfaction.</li>
        </ul>
        <p>Feel free to browse our site and learn more about us.</p>
      </PageWrapper>
    );
  }
  
  export default HomePage;