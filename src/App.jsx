// App.js

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages//SignUp"
import Event from "./pages/EventPage"
import CirclePage from "./pages/CirclePage"
import ActivityPage from "./pages/ActivityPage"
import HomePageHost from "./pages/HomePageHost/homePageHost"


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
import PostComponent from "./components/PostComponent";


export default function App() {
  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/EventPage" element={<Event />} />

          <Route path="/CirclePage" element={<CirclePage />} />

          <Route path="/ActivityPage" element={<ActivityPage />} />

          <Route path="/HomePageHost" element={<HomePageHost />} />




        <Route path="/CommunityPage" element={<CommunityPage/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  );
}