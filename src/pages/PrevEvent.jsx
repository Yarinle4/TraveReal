import ImageAvatars from "../components/Avatar";
import Header from "../components/EventHeader";
import NewHeaderRate from "../components/NewHeaderRate";
import ECommerce from "../components/ProfilePage";
// import { Basic } from '../components/Profile'
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import styled from "styled-components";
import { Box } from "@mui/system";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import RatingPopupContent from "../components/RatingPopupContent";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

function PrevEvent() {
  const location = useLocation();
  //   const { slide, slideId } = location.state;

  //   const curCircle = location.state.curCircle;

  //   const curCity = location.state.curCity;

  const slideId = "n0OZxc97icAC3hBbtFer";
  const slide = "a";
  const curCircle = "Culinary Circle";
  const curCity = "Jerusalem";

  // Initialise event data as null
  const [myEventData, setMyEventData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Simulating the delay of 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Use an effect hook to fetch the event data when the component mounts
  useEffect(() => {
    const fetchEventData = async () => {
      const db = getFirestore();
      const docRef = doc(db, "events", slideId);
      const docSnap = await getDoc(docRef);
      console.log("event id:");
      if (docSnap.exists(docRef.ID)) {
        // Map Firestore document data to myEventData format
        const eventData = docSnap.data();
        setMyEventData({
          host: eventData.host,
          time: eventData.time,
          title: eventData.name,
          rating: 4.3, // This needs to be updated with the correct field from Firestore
          details: eventData.description,
          photos: eventData.eventPictureUrl,
          circles: [eventData.circle], // This needs to be updated if 'circle' field in Firestore is an array
          location: eventData.location,
          mapLocation: eventData.city,
          eventID: slideId,
        });
        console.log("user host:", eventData.city);
      } else {
        console.log("No such document!");
      }
    };

    fetchEventData();
  }, [slideId]); // Re-run effect when slide.id changes

  if (!myEventData) {
    // Render a loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  const handleRatingSubmit = async (rating) => {
    const userRef = doc(db, "users", "user_" + myEventData.host);
    try {
      await updateDoc(userRef, {
        rating: arrayUnion(rating),
      });
      console.log("Rating submitted successfully!");
    } catch (error) {
      console.error("Error submitting rating: ", error);
    }
  };

  return (
    <>
      <ResponsiveAppBar position="fixed" />
      <NewHeaderRate
        eventData={myEventData}
        slide={slide}
        curCircle={curCircle}
        curCity={curCity}
      />
      {showPopup && (
        <RatingPopupContent
          open={showPopup}
          onClose={() => setShowPopup(false)}
          onSubmit={handleRatingSubmit}
        />
      )}
      <SimpleBottomNavigation />
    </>
  );
}

export default PrevEvent;
