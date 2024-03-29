import "./activities.css";
import ActivitiesCards from "../../components/ActivitiesJ";
import People from "../../components/PoepleActivities";
import ReactCardSlider from "../../components/ReactCardSlider";
import ResponsiveAppBar from "../../shared/components/moreComponents/MainBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

//people:
import avatarPic from "../../assets/profile_picture_new.jpg";

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
import doctor from "../../assets/doctor.jpg";
import SimpleBottomNavigation from "../../shared/components/moreComponents/BottomNav";
import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";

import { db } from "../../firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import EventCitySelection from "../../components/CitySelection";

function HomePageHost() {
  const fakeCircle = "culinary";

  const navigate = useNavigate();

  const sliderClick = (slider) => {
    alert("hello world");
  };

  const FirstsliderName = "addEvent";
  const SecondsliderName = "addTip";
  const Firstpeople = "addPeople";

  // const hosts = [
  //     {
  //       photo: avatarPic,
  //       name: "Dana"
  //     },
  //   ];

  // const People = () => {
  //   return (
  //     <div
  //       style={{
  //         overflowY: "auto", // Enable vertical scrolling
  //         maxHeight: "calc(100vh - 100px)", // Set the maximum height of the container
  //       }}
  //     >
  //       <Box sx={{ display: "flex", gap: "10px", ml: 2, mr: 2, mb: 2 }}>
  //         <div>
  //           <Avatar
  //             sx={{ width: 80, height: 80, mb: 1 }}
  //             alt="Person 1"
  //             src={avatarPic}
  //             onClick={() => navigate("/ProfilePage")}
  //           />
  //           <Typography sx={{ fontSize: "100%" }} align="center">
  //             Yarin Levy
  //           </Typography>
  //         </div>
  //         <div>
  //           <Avatar
  //             sx={{ width: 80, height: 80, mb: 1 }}
  //             alt="Person 2"
  //             src={avatarPic}
  //             onClick={() => navigate("/ProfilePage")}
  //           />
  //           <Typography sx={{ fontSize: "100%" }} align="center">
  //             Yarin Levy
  //           </Typography>
  //         </div>
  //         <div>
  //           <Avatar
  //             sx={{ width: 80, height: 80, mb: 1 }}
  //             alt="Person 3"
  //             src={avatarPic}
  //             onClick={() => navigate("/ProfilePage")}
  //           />
  //           <Typography sx={{ fontSize: "100%" }} align="center">
  //             Yarin Levy
  //           </Typography>
  //         </div>
  //         <div>
  //           <Avatar
  //             sx={{ width: 80, height: 80, mb: 1 }}
  //             alt="Person 4"
  //             src={avatarPic}
  //             onClick={() => navigate("/ProfilePage")}
  //           />
  //           <Typography sx={{ fontSize: "100%" }} align="center">
  //             Yarin Levy
  //           </Typography>
  //         </div>
  //         <div>
  //           <Avatar
  //             sx={{ width: 80, height: 80, mb: 1 }}
  //             alt="Person 5"
  //             src={avatarPic}
  //             onClick={() => navigate("/ProfilePage")}
  //           />
  //           <Typography sx={{ fontSize: "100%" }} align="center">
  //             Yarin Levy
  //           </Typography>
  //         </div>
  //       </Box>
  //     </div>
  //   );
  // };

  // const events = [
  //   {
  // image: WineryTour,
  //     title: "Winery Tour",
  //     description: "Cheers to good times",
  //     date: "Today | 5PM",
  //     // points: "10 stars",
  //     location: "1.7km away",
  //     clickEvent: sliderClick,
  //   },
  //   {
  //     image: foodWorkshop,
  //     title: "Food Workshop",
  //     description: "Bring out the artist in you",
  //     date: "Tomorrow | 10AM",
  //     // points: "15 stars",
  //     location: "2.3km away",
  //     clickEvent: sliderClick,
  //   },
  //   {
  //     image: market,
  //     title: "Street Food Tour",
  //     description: "Eat local, travel global",
  //     date: "Sun 30 Apr | 2PM",
  //     // points: "10 stars",
  //     location: "500m away",
  //     clickEvent: sliderClick,
  //   },
  //   {
  //     image: food,
  //     title: "Food Tour",
  //     description: "Tasting the best",
  //     date: "Tue 2 May | 8PM",
  //     // points: "20 stars",
  //     location: "300m away",
  //     clickEvent: sliderClick,
  //   },
  //   {
  //     image: cheese,
  //     title: "Boutique Dairies",
  //     description: "Say cheese!",
  //     date: "Thu 4 May | 10AM",
  //     // points: "5 stars",
  //     location: "1.5 km away",
  //     clickEvent: sliderClick,
  //   },
  //   {
  //     image: challah,
  //     title: "Hafrashat Challah",
  //     description: "Observance of Torah mitzva",
  //     date: "Mon 8 May | 9PM",
  //     // points: "5 stars",
  //     location: "3.7 km away",
  //     clickEvent: sliderClick,
  //   },
  // ];

  const tips = [
    // {
    //   image: picnic,
    //   title: "Picnic Spots",
    //   description: "Blue skies and good food",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: strawberryPicking,
    //   title: "Agriculture",
    //   description: "Picking fresh food",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: Bakery,
    //   title: "Bakeries",
    //   description: "The best in town",
    //   clickEvent: sliderClick,
    // },
    {
      image: doctor,
      title: "Emergency Info",
      description: "Essential contacts",
      clickEvent: sliderClick,
      destination: "/EmergencyAssistancePage",
    },
    {
      image: apps,
      title: "Useful Apps",
      description: "Public Transport, etc.",
      clickEvent: sliderClick,
      destination: "/TipsPage",
    },
  ];

  const Search = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          placeholder="search"
          style={{
            width: "90%",
            borderRadius: 7,
            height: 30,
            backgroundColor: "white",
            opacity: 0.5,
          }}
        ></input>
      </div>
    );
  };

  const location = useLocation();
  const circleclicked = location.state.curCircle;
  const curCity = location.state.curCity;

  const getCircle = (circleclicked) => {
    switch (circleclicked) {
      case "Culinary Circle":
        return "culinary";
      case "Digital Nomads Circle":
        return "digital-nomads";
      case "History Circle":
        return "History";
      case "Bonding Circle":
        return "bonding";
      case "Architecture Circle":
        return "architecture";
    }
  };

  const event = "/EventPage";
  const [events, setEvents] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [city, setCity] = useState(curCity);
  const currentDate = new Date();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(
          collection(db, "events"),
          where("date", ">=", currentDate.toISOString().split("T")[0]),
          where("circle", "in", [getCircle(circleclicked)]),
          where("city", "==", city)
        );
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const userFields = eventsData.map((doc) => doc.host);
        setEvents(eventsData);
        var eventsData_1 = [];
        if (userFields.length != 0) {
          const h = query(
            collection(db, "users"),
            where("uid", "in", userFields)
          );
          const querySnapshot_1 = await getDocs(h);
          eventsData_1 = querySnapshot_1.docs.map((doc) => doc.data());
        }
        setHosts(eventsData_1);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [city]);

  return (
    <div className="hostHome">
      <ResponsiveAppBar position="fixed" />
      <div id="upper">{circleclicked}</div>
      <Box mt={3}>
        <EventCitySelection city={city} setCity={setCity} />
      </Box>
      <div class="body">
        <div id="title">Circle Hosts</div>
        <People
          users={hosts}
          idPeople={Firstpeople}
          curCircle={circleclicked}
          curCity={city}
        />
      </div>
      <div class="body">
        <div id="title">Upcoming Events</div>
        {/* <Search /> */}
        <div>
          <ActivitiesCards
            slides={events}
            idSlide={FirstsliderName}
            curCircle={circleclicked}
            curCity={city}
            path={event}
          />
        </div>
      </div>
      <div class="buttomBody">
        <div id="title">Tips</div>
        {/* <Search /> */}
        <div>
          <ReactCardSlider
            slides={tips}
            idSlide={SecondsliderName}
            curCircle={circleclicked}
            curCity={city}
          />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default HomePageHost;
