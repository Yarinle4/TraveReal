import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import blueCircleImage from "../assets/bar.png";
import beer from "../assets/beer.jpg";
import history from "../assets/history.png";
import architecture from "../assets/architecture.png";
import food from "../assets/food.png";
import sharedWorkspace from "../assets/sharedWorkspace.jpg";

import lockIcon from "../assets/lock.svg"; // Replace with the actual path to your lock icon SVG file
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import avatarPic from "../assets/profile_picture_new.jpg";
import { getAuth } from "firebase/auth";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  updateDoc,
  increment,
} from "firebase/firestore";

const CirclePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
width: ${(props) => props.size};
height: ${(props) => props.size};
border-radius: 50%;
position: absolute;
${(props) =>
  props.position &&
  Object.entries(props.position)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n")}
display: flex; /* Add display: flex */
align-items: center; /* Vertically align items to center */
justify-content: center; /* Horizontally align items to center */

}
`;

const ProfileCircle = styled(Circle)`
  background-image: url(${(props) => props.imageUrl});
`;

const ImageCircle = styled(Circle)`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  overflow: hidden; /* Add overflow: hidden to hide pseudo-element overflow */
::before {
  /* Add pseudo-element */
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.isLocked ? "transparent" : "rgba(128, 128, 128, 0.5)"};
  z-index: 1; /* Set z-index to overlap with circle content */

  &:hover {
    /* Add hover effect */
    border: 2px solid #000;
  }
`;

const CircleRapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotationAngle}deg);
  background-color: red;
  // display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const LockIcon = styled.div`
  /* Use the lock icon SVG as a background image */
  background-image: url(${lockIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 50%;
  z-index: 3; /* Set higher z-index to appear above the circle content and the pseudo-element */
`;

const CirclePage = (stars) => {
  const centerCircleSize = "150px";
  const smallerCircleSize = "90px";

  const centerCirclePosition = {
    top: "26%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const smallerCircleColors = ["empty", " pizza", " travel", "coding", "pats"];

  const smallerCircleRadius = 150;

  const [rotationAngle, setRotationAngle] = useState(0);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [circleClicked, setCircleClicked] = useState();
  const circleCollectionRef = collection(db, "circles");
  const [circleList, setCircleList] = useState([]);
  const [userCircleList, setUserCircleList] = useState([]);
  const [userImg, setUserImg] = useState([]);

  const navigate = useNavigate();

  const getCirclePosition = (radius, angle) => {
    const centerX = 0;
    const centerY = -200;
    const xPos = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const yPos = centerY + radius * Math.sin((angle * Math.PI) / 180);
    return {
      top: `${yPos}px`,
      left: `${xPos}px`,
      transform: "translate(-50%, -50%)",
    };
  };

  const smallerCirclePositions = smallerCircleColors.map((_, index) =>
    getCirclePosition(smallerCircleRadius, rotationAngle + index * 72)
  );

  const handleCircleClick = () => {
    navigate("/ProfilePage");
  };

  const handleSingleCircleClick = (curCircle) => {
    setCircleClicked(curCircle);
    if (isInUserCircle(curCircle)) {
      navigate("/activities", { state: { curCircle } });
    } else {
      console.log();
      if (stars.stars < 10) {
        setAlertOpen(true);
      } else {
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user ? user.uid : "a";
    const userRef = doc(db, "users", "user_" + uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      await updateDoc(userRef, {
        circle: arrayUnion(circleClicked),
        stars: increment(-10),
      });
    }
    console.log("calling get image");
    getImg();
    setOpen(false);
  };

  const handleNo = () => {
    // Handle "No" response here
    setOpen(false);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user ? user.uid : "a";
        const userRef = doc(db, "users", "user_" + uid);
        const userDoc = await getDoc(userRef);
        const circles = userDoc.data().circle;
        const img = userDoc.data().profilePictureUrl;
        setUserImg(img);
        setUserCircleList(circles);
      } catch (e) {
        console.error(e);
      }
    };

    loadUsers();
  }, [open]);

  const getImg = async () => {
    try {
      console.log("getImg");
      const data = await getDocs(circleCollectionRef);
      const dataFilltered = data.docs.map((doc) => ({ ...doc.data() }));
      setCircleList(dataFilltered);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  const isInUserCircle = (name) => {
    return userCircleList.includes(name);
  };

  return (
    <CirclePageContainer>
      <CircleRapper>
        {circleList.map((circle, index) => (
          <ImageCircle
            key={index}
            size={smallerCircleSize}
            imageUrl={circle.img}
            position={smallerCirclePositions[index]}
            onClick={() => handleSingleCircleClick(circle.name)}
            isLocked={isInUserCircle(circle.name)}
          >
            {!isInUserCircle(circle.name) && <LockIcon />}
          </ImageCircle>
        ))}
      </CircleRapper>
      <ProfileCircle
        size={centerCircleSize}
        position={centerCirclePosition}
        onClick={() => handleCircleClick()}
      >
        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="Remy Sharp"
          src={userImg}
        />
      </ProfileCircle>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: "bold" }}>Confirmation</DialogTitle>
        <DialogContent>Do you want to Unlock this circle?</DialogContent>
        <DialogActions>
          <Button onClick={handleYes}>Yes</Button>
          <Button onClick={handleNo}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={alertOpen} onClose={handleAlertClose}>
        <DialogTitle sx={{ fontWeight: "bold" }}>
          You don't have enough stars.
        </DialogTitle>
        <DialogContent>To unlock this circle, collect 10 stars</DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </CirclePageContainer>
  );
};

export default CirclePage;
