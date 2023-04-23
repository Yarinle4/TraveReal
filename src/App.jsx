// App.js

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages//SignUp"
import Event from "./pages/EventPage"
import CirclePage from "./pages/CirclePage"
import HomePageHost from "./pages/HomePageHost"
import SlidingCardComponent from "./pages/SlidingCardPage"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/EventPage" element={<Event />} />

        <Route path="/CirclePage" element={<CirclePage />} />

        <Route path="/HomePageHost" element={<HomePageHost />} />

        <Route path="/SlidingCardPage" element={<SlidingCardComponent />} />

        <Route path="/CommunityPage" element={<StoryComponent/>} />



      </Routes>
    </BrowserRouter>
  );
}
