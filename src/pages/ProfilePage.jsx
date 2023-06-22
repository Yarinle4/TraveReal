import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FcRating } from "react-icons/fc";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/material/Chip";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import avatarPic from "../assets/profile_picture_new.jpg";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

const RatingcustomStyle = {
  "& .MuiRating-iconFilled": {
    color: "#FFFF00",
    fontSize: "30px",
  },
  "& .MuiRating-iconEmpty": {
    fontSize: "30px",
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

// const DetailsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   margin: 80px 50px;
// `;
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

// const ProfileContact = styled.p`
//   display: flex;
//   flex-direction: row;
//   font-size: 20px;
//   margin: 10px 0;
//   font-weight: bold;
//   text-align: left;
// `;

// const ProfileData = styled.p`
//   font-size: 20px;
//   margin: 10px 0;
//   font-weight: normal;
//   text-align: left;
// `;

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

function ProfilePage() {
  const centerCircleSize = "150px";

  const [stars, setStars] = useState(0);
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
  const [rating, setRating] = useState(0);

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user ? user.uid : "";
  const userRef = doc(db, "users", "user_" + uid);
  console.log("Document ref is updated with UID: ", uid);

  useEffect(() => {
    const loadStars = async () => {
      try {
        const unsubscribe = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const userStars = doc.data().stars;
            setStars(userStars);
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error(error);
      }
    };

    loadStars();

    const fetchUserData = async () => {
      try {
        const userSnapshot = await getDoc(userRef);
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
          setRating(userData.rating);
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
        <ProfileHeader>
          <IconButton
            aria-label="Back"
            size="large"
            onClick={() => navigate("/HomePage")}
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
        </ProfileHeader>
        <Avatar
          sx={{ width: 150, height: 150, mt: 3, mb: 3 }}
          alt="Profile picture"
          src={downloadURL || avatarPic}
        />
        <ProfileName>
          {firstName} {lastName}
        </ProfileName>
        <ProfileBio>{aboutText}</ProfileBio>
        <CoinWrapper>
          <CoinIcon />
          <CoinCount>{stars}</CoinCount>
        </CoinWrapper>
        <CoinWrapper>
          <Rating
            name="read-only"
            value={rating}
            readOnly
            sx={RatingcustomStyle}
            size="large"
          />
        </CoinWrapper>
      </ProfileWrapper>
      <DetailsWrapper>
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
          Country: <ProfileData>{country}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Email: <ProfileData>{email}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Languges:{" "}
          <ProfileData>{languages && languages.join(", ")}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Hobbies: <ProfileData>{hobbies && hobbies.join(", ")}</ProfileData>
        </ProfileContact>
        <ProfileContact>Circles:</ProfileContact>
        <Stack direction="row" spacing={1}>
          {circles.map((circle, index) => (
            <Chip key={index} color="primary" label={circle} />
          ))}
        </Stack>
      </DetailsWrapper>
    </>
  );
}

export default ProfilePage;
