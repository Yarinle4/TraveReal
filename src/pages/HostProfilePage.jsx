import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FcRating } from "react-icons/fc";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/material/Chip";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import avatarPic from "../assets/profile_picture_new.jpg";
import Rating from "@mui/material/Rating";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { getDownloadURL } from "firebase/storage";

const RatingcustomStyle = {
  "& .MuiRating-iconFilled": {
    color: "#FFFF00",
    fontSize: "23px",
  },
  "& .MuiRating-iconEmpty": {
    fontSize: "23px",
  },
  "& .MuiRating-iconHover": {
    color: "purple",
  },
  "& .MuiRating-decimal:hover": {
    transform: "scale(2.5)",
  },
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px 0;
`;

const ProfileName = styled.h1`
  font-size: 30px;
  margin: 0;
`;

const ProfileBio = styled.p`
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 40px 50px;
`;

const ProfileContact = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

const ProfileData = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin: 0px 10px;
  font-weight: normal;
  text-align: left;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CoinIcon = styled(FcRating)`
  font-size: 30px;
  margin-right: 5px;
`;

const CoinCount = styled.span`
  font-size: 20px;
  margin-left: 5px;
  font-weight: normal;
`;

const textFieldStyle = {
  backgroundColor: "white",
};

// const example_uid = 'user_w8C4C8C9M4P8gnjkHjf4D1jkruC2';

function ProfilePage() {
  const location = useLocation();
  const user_uid = "user_" + location.state.uid;

  const curCircle = location.state.curCircle;

  const curCity = location.state.curCity;

  const navigate = useNavigate();
  const [downloadURL, setDownloadURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [circles, setCircles] = useState([]);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userSnapshot = await getDoc(doc(db, "users", user_uid));
        //edit example uid to passed uid from
        const userData = userSnapshot.data();
        if (userData && userData.profilePictureUrl) {
          setDownloadURL(userData.profilePictureUrl);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setAboutText(userData.aboutText);
          setAge(userData.age);
          setCountry(userData.country);
          setHobbies(userData.selectedHobbies);
          setGender(userData.gender);
          setLanguages(userData.selectedLanguages);
          setCircles(userData.circle);
          const userRatingArray = userData.rating;
          // Calculate the average
          const sum = userRatingArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
          const average = sum / userRatingArray.length;
          setRating(average);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <ResponsiveAppBar position="fixed" />

      <ProfileWrapper sx={{ mt: 10 }}>
        <ProfileHeader></ProfileHeader>
        <IconButton
          aria-label="Back"
          size="large"
          onClick={() =>
            navigate("/activities", { state: { curCircle, curCity } })
          }
          sx={{
            top: 0,
            left: 0,
            display: "flex",
            position: "absolute",
            mt: 10,
          }}
        >
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
        <ProfileImage src={downloadURL || avatarPic} alt="Profile picture" />
        <ProfileName>
          {firstName} {lastName}
        </ProfileName>
        <ProfileBio>{aboutText}</ProfileBio>
      </ProfileWrapper>
      <DetailsWrapper>
        <ProfileContact>
          Rating:
          <Rating
            name="read-only"
            value={rating}
            readOnly
            sx={RatingcustomStyle}
          />
        </ProfileContact>

        <ProfileContact>
          Country: <ProfileData>{country}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Age: <ProfileData>{age}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Gender: <ProfileData>{gender}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Languges:{" "}
          <ProfileData>{languages && languages.join(", ")}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Hobbies: <ProfileData>{hobbies && hobbies.join(", ")}</ProfileData>
        </ProfileContact>
        {/* <ProfileContact>Hobbies:</ProfileContact>
        <Stack useFlexGap="true" direction="row" spacing={1}>
          <Chip color="primary" label="Dogs" />
          <Chip color="primary" label="Math" />
          <Chip color="primary" label="Cooking" />
        </Stack> */}
        <ProfileContact></ProfileContact>
        <ProfileContact>Circles:</ProfileContact>
        <Stack direction="row" spacing={1}>
          {circles.map((circle, index) => (
            <Chip key={index} color="primary" label={circle} />
          ))}
        </Stack>
      </DetailsWrapper>

      <DetailsWrapper>
        <Button variant="outlined" onClick={handleOpen}>
          Contact me!
        </Button>
      </DetailsWrapper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Information</DialogTitle>

        <DialogContent>
          <ProfileContact>
            Email: <ProfileData>
            <div onClick={(e) => {window.location.href ='mailto:'+{email};}}>{email}</div>
              {/* mailto:{email} */}
              </ProfileData>
          </ProfileContact>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProfilePage;
