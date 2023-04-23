import { Link } from "react-router-dom";

// import {SwipeableTemporaryDrawer} from "../shared/components/moreComponents/drawer"

// import { testComponent } from "../shared/components/moreComponents/testComponent";
import SwipeableTemporaryDrawer from "../shared/components/moreComponents/drawer"


function HomePage() {
    return (
      <div>
         {/* <testComponent/> */}

        <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
        <h1>Welcome to My Website</h1>
        <p>Thanks for visiting! Here's some information about what we do:</p>
        <ul>
          <li><Link to="/SignUp">SIgn Up</Link></li>
          <li><Link to="/CirclePage">Circle Page</Link></li>
          <li><Link to="/EventPage">Event Page</Link></li>
          <li><Link to="/EventPageHost">Host Page</Link></li>
          <li><Link to="/SlidingCardPage">Sliding Card Page</Link></li>




          <li>We provide high-quality products and services.</li>
          <li>We have a team of experienced professionals.</li>
          <li>We're dedicated to customer satisfaction.</li>
        </ul>
        <p>Feel free to browse our site and learn more about us.</p>
      </div>
    );
  }
  
  export default HomePage;