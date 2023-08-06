import React from "react";
import Header from "../components/ComminityHeader.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar.jsx";
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
// import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav.jsx";
import Button from "@mui/material/Button";

import ActivitiesCards from "../components/ActivitiesJ";
import People from "../components/PoepleActivities";
import ReactCardSlider from "../components/ReactCardSlider";

import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";
import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";

import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import EventCitySelection from "../components/CitySelection";
import { Events } from "leaflet";
import EventsSelection from "../components/EventsSelection.jsx";

function MyEvents() {
  const fakeCircle = "culinary";

  const navigate = useNavigate();

  const FirstsliderName = "addEvent";
  const SecondSliderName = "second-slider";
  const UpcomingEvent = "/UpcomingEvent";
  const PrevEvent = "/PrevEvent";

  const location = useLocation();
  const curCity = location.state?.curCity || "Jerusalem";

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [city, setCity] = useState(curCity);
  const currentDate = new Date();
  const [option, SetOption] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user ? user.uid : "";

        const upcomingQ = query(
          collection(db, "events"),
          where("date", ">=", currentDate.toISOString().split("T")[0])
        );

        const upcomingSnapshot = await getDocs(upcomingQ);
        const upcomingData = upcomingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const upcomingEventsWithUser = upcomingData.filter((event) => {
          if (option === "Traveler") {
            if (event.participants.length !== 0) {
              return event.participants.includes(uid);
            }
          }
          if (option === "Host") {
            return event.host === uid;
          }

          return false;
        });

        setUpcomingEvents(upcomingEventsWithUser);

        const previousQ = query(
          collection(db, "events"),
          where("date", "<", currentDate.toISOString().split("T")[0])
        );
        const previousSnapshot = await getDocs(previousQ);
        const previousData = previousSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const previousEventsWithUser = previousData.filter((event) => {
          if (option === "Traveler") {
            if (event.participants.length !== 0) {
              return event.participants.includes(uid);
            }
          }
          if (option === "Host") {
            return event.host === uid;
          }
          return false;
        });
        setPreviousEvents(previousEventsWithUser);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [option]);

  return (
    <div className="hostHome">
      <ResponsiveAppBar position="fixed" />
      <Box
        id="upper"
        sx={{
          mt: 8,
          fontSize: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#679E84",
        }}
      >
        My Events
      </Box>
      <Box mt={3}>
        <EventsSelection option={option} setOption={SetOption} />
      </Box>
      <Box mt={3}></Box>
      <div class="body">
        <div id="title"> My Upcoming Events</div>
        <div>
          <ActivitiesCards
            slides={upcomingEvents}
            idSlide={FirstsliderName}
            path={UpcomingEvent}
          />
        </div>
      </div>
      <div class="buttomBody">
        <div id="title">My Previous Events</div>
        <div>
          <ActivitiesCards
            slides={previousEvents}
            idSlide={SecondSliderName}
            path={PrevEvent}
          />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default MyEvents;

// function MyEvents() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Button
//         onClick={() => navigate("/UpcomingEvent")}
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//         >
//         Upcoming Events
//       </Button>
//       <Button
//         onClick={() => navigate("/PrevEvent")}
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//         >
//         Previous events
//       </Button>

//       <SimpleBottomNavigation />

//     </div>
//   );
// }
// export default MyEvents;
