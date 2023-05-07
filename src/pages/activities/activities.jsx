import "./activities.css";
import ActivitiesCards from "../../components/ActivitiesJ";
import ReactCardSlider from "../../components/ReactCardSlider";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../../shared/components/moreComponents/MainBar";

//events:
import WineryTour from "../../assets/WineryTour.jpg";
import foodWorkshop from "../../assets/foodWorkshop.jpg";
import market from "../../assets/StreetMarket.jpg";
import food from "../../assets/food.png";
import cheese from "../../assets/dairies.jpg";
import challah from "../../assets/challah.png";

//tips:
import Bakery from "../../assets/Bakery.jpg";
import picnic from "../../assets/picnic.jpg";
import apps from "../../assets/apps.png";
import strawberryPicking from "../../assets/strawberryPicking.jpg";
import resturant from "../../assets/resturant.jpg";
import SimpleBottomNavigation from "../../shared/components/moreComponents/BottomNav";

function HomePageHost() {
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const FirstsliderName = "addEvent";
  const SecondsliderName = "addTip";

  const events = [
    {
      image: WineryTour,
      title: "Winery Tour",
      description: "Cheers to good times",
      date: "Today | 5PM",
      points: "10 pts.",
      clickEvent: sliderClick,
    },
    {
      image: foodWorkshop,
      title: "Food Workshop",
      description: "Bring out the artist in you",
      date: "Tomorrow | 10AM",
      points: "15 pts.",
      clickEvent: sliderClick,
    },
    {
      image: market,
      title: "Street Food Tour",
      description: "Eat local, travel global",
      date: "Sun 30 Apr | 2PM",
      points: "10 pts.",
      clickEvent: sliderClick,
    },
    {
      image: food,
      title: "Food Tour",
      description: "Tasting the best",
      date: "Tue 2 May | 8PM",
      points: "20 pts.",
      clickEvent: sliderClick,
    },
    {
      image: cheese,
      title: "Boutique Dairies",
      description: "Say cheese!",
      date: "Thu 4 May | 10AM",
      points: "5 pts.",
      clickEvent: sliderClick,
    },
    {
      image: challah,
      title: "Hafrashat Challah",
      description: "Observance of Torah mitzva",
      date: "Mon 8 May | 9PM",
      points: "5 pts.",
      clickEvent: sliderClick,
    },
  ];

  const tips = [
    {
      image: picnic,
      title: "Picnic Spots",
      description: "Blue skies and good food",
      clickEvent: sliderClick,
    },
    {
      image: strawberryPicking,
      title: "Agriculture",
      description: "Picking fresh food",
      clickEvent: sliderClick,
    },
    {
      image: Bakery,
      title: " Bakeries",
      description: "The best in town",
      clickEvent: sliderClick,
    },
    {
      image: resturant,
      title: "Have to Visit",
      description: "Places not to be missed!",
      clickEvent: sliderClick,
    },
    {
      image: apps,
      title: "Useful Apps",
      description: "Public Transport, etc.",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div className="hostHome">
      <ResponsiveAppBar position="fixed" />

      <div id="upper">Welcome to the Culinary Circle!</div>
      <div class="body">
        <div id="title">Upcoming Events</div>
        <div>
          <ActivitiesCards slides={events} idSlide={FirstsliderName} />
        </div>
        {/* <Button variant="contained" color="primary" className="buttonHost">Another Event</Button> */}
      </div>
      <div class="body">
        <div id="title">Tips</div>
        <div>
          <ReactCardSlider slides={tips} idSlide={SecondsliderName} />
        </div>
        {/* <Button variant="contained" color="primary" className="buttonHost">Another Tip</Button> */}
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default HomePageHost;
