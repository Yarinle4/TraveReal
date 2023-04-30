// App.js

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp"
import SignUp2 from "./pages/signUpLevel2"
import Event from "./pages/EventPage"
import HomePageHost from "./pages/HomePageHost/homePageHost"
import Activities from "./pages/activities/activities"
import Profile from "./pages/ProfilePage"
import CreateEventPage from "./pages/CreateNewEvent"


import { createTheme, colors, ThemeProvider } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#679E84',
     }
    }
  });


import CommunityPage from "./pages/CommunityPage";


export default function App() {
  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>

          <Route path="/HomePage" element={<HomePage />} />

          <Route path="/" element={<SignUp />} />

          <Route path="/EventPage" element={<Event />} />

          <Route path="/HomePageHost" element={<HomePageHost />} />

          <Route path="/details" element={<SignUp2 />} />

          <Route path="/activities" element={<Activities />} />

          <Route path="/ProfilePage" element={<Profile />} />

          <Route path="/CreateNewEvent" element={<CreateEventPage/>} />

        <Route path="/CommunityPage" element={<CommunityPage/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  );
}
  