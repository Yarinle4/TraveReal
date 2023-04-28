// App.js

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages//SignUp"
import Event from "./pages/EventPage"
import CirclePage from "./pages/CirclePage"
import SlidingCardComponent from "./pages/SlidingCardPage"
import ActivityPage from "./pages/ActivityPage"


export default function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/EventPage" element={<Event />} />

        <Route path="/CirclePage" element={<CirclePage />} />

        <Route path="/SlidingCardPage" element={<SlidingCardComponent />} />

        <Route path="/ActivityPage" element={<ActivityPage />} />




      </Routes>
    </BrowserRouter>
  );
}
