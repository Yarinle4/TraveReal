import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import SignUp2 from "./signUpLevel2";
import Event from "./EventPage";
import HomePageHost from "./HomePageHost/homePageHost";
import Activities from "./activities/activities";
import Profile from "./ProfilePage";
import CommunityPage from "./CommunityPage";
import CreateEventPage from "./CreateNewEvent";
import TipsPage from "./TipsPage";
import HostProfilePage from "./HostProfilePage";

function Routess() {
  return (
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />

      <Route path="/" element={<SignUp />} />

      <Route path="/EventPage" element={<Event />} />

      <Route path="/HomePageHost" element={<HomePageHost />} />

      <Route path="/details" element={<SignUp2 />} />

      <Route path="/activities" element={<Activities />} />

      <Route path="/ProfilePage" element={<Profile />} />

      <Route path="/CreateNewEvent" element={<CreateEventPage />} />

      <Route path="/CommunityPage" element={<CommunityPage />} />

      <Route path="/TipsPage" element={<TipsPage />} />

      <Route path="/HostProfilePage" element={<HostProfilePage />} />
    </Routes>
  );
}

export default Routess;
