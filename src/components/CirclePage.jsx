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

import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore";

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

const ImageCircleSingle = styled(Circle)`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;

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

const CirclePage = () => {
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
  const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovering) {
  //       setRotationAngle((prevAngle) => prevAngle + 0.2); // Rotate by 6 degrees every 50 milliseconds
  //     }
  //   }, 50);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isHovering]);

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

  // const smallerCirclePositionsSingle = () =>
  //   getCirclePosition(smallerCircleRadius, rotationAngle + 5 * 72);

  // const [isVisible, setIsVisible] = useState(false);

  const handleCircleClick = () => {
    navigate("/ProfilePage");
  };

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  const navigate = useNavigate();

  const handleSingleCircleClick = () => {
    console.log("clicked");
    navigate("/activities");
  };

  const handleSingleCircleHover = () => {
    console.log("hover");
    setRotationAngle((prevAngle) => prevAngle + 0);
  };

  const [curr_user, setCurrUser] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        console.log("user");
        const user = await auth.currentUser;
        setCurrUser(user);
      } catch (e) {
        console.error(e);
      }
    };

    loadUsers();
  }, []);

  const fakeCircleList = [false, true, true, false, false];

  const circleCollectionRef = collection(db, "circles");
  const [circleList, setCircleList] = useState([]);

  useEffect(() => {
    const getImg = async () => {
      try {
        console.log("circles");
        const data = await getDocs(circleCollectionRef);
        const dataFilltered = data.docs.map((doc) => ({ ...doc.data() }));
        setCircleList(dataFilltered);
      } catch (e) {
        console.error(e);
      }
    };

    getImg();
  }, []);

  return (
    <CirclePageContainer>
      <CircleRapper>
        {circleList.map((circle, index) => (
          <ImageCircle
            key={index}
            size={smallerCircleSize}
            imageUrl={circle.img}
            position={smallerCirclePositions[index]}
            onClick={() => handleSingleCircleClick()}
            isLocked={fakeCircleList[index]}
          >
            {!fakeCircleList[index] && <LockIcon />}
          </ImageCircle>
        ))}
        {/* <ImageCircleSingle
          key={4}
          size={smallerCircleSize}
          //singleCircle.map((circle) => {circle.img})
          imageUrl={food}
          // position={smallerCirclePositionsSingle()}
          // onClick={() => handleSingleCircleClick()}
          // onMouseEnter={() => handleMouseEnter()}
          // onMouseLeave={() => handleMouseLeave()}
        ></ImageCircleSingle> */}
      </CircleRapper>
      <ProfileCircle
        size={centerCircleSize}
        // imageUrl={barImg}
        position={centerCirclePosition}
        onClick={() => handleCircleClick()}
      >
        {/* <Avatar alt="Remy Sharp" src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' /> */}

        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="Remy Sharp"
          src={avatarPic}
        />
      </ProfileCircle>
    </CirclePageContainer>
  );
};

export default CirclePage;
