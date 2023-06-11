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
import { Button } from "@mui/material";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import {getDownloadURL} from 'firebase/storage'


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

const example_uid = 'user_w8C4C8C9M4P8gnjkHjf4D1jkruC2';

function ProfilePage() {
  const navigate = useNavigate();
  const [downloadURL, setDownloadURL] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [gender, setGender] = useState('');
  const [languages, setLanguages] = useState('');
  const [circles, setCircles] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userSnapshot = await getDoc(doc(db, 'users', example_uid));
        //edit example uid to passed uid from
        const userData = userSnapshot.data();
        if (userData && userData.profilePictureUrl) {
          setDownloadURL(userData.profilePictureUrl);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setAboutText(userData.aboutText);
          setAge(userData.age);
          setCountry(userData.country);
          setHobbies(userData.selectedHobbies);
          setGender(userData.gender);
          setLanguages(userData.selectedLanguages);
          setCircles(userData.circle)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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
        <ProfileImage
          src={downloadURL || avatarPic}
          alt="Profile picture"
        />
        <ProfileName>{firstName} {lastName}</ProfileName>
        <ProfileBio>{aboutText}</ProfileBio>

      </ProfileWrapper>
      <DetailsWrapper>
        <ProfileContact>
        Country: <ProfileData>{country}</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Home Town: <ProfileData>Jerusalem</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Age: <ProfileData>{age}</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Gender: <ProfileData>{gender}</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Profession: <ProfileData>CS Student</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Languges: <ProfileData>{languages}</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Email: <ProfileData>john.doe@example.com</ProfileData>
        </ProfileContact>
        {/* <ProfileContact>Hobbies:</ProfileContact>
        <Stack useFlexGap="true" direction="row" spacing={1}>
          <Chip color="primary" label="Dogs" />
          <Chip color="primary" label="Math" />
          <Chip color="primary" label="Cooking" />
        </Stack> */}
        <ProfileContact></ProfileContact>
        <ProfileContact>Circles:</ProfileContact>
        <Stack useFlexGap="true"  direction="row" spacing={1}>
          <Chip color="primary" label={"circle"} />
          {/* <Chip color="primary" label="Love Circle" /> */}
        </Stack>

      </DetailsWrapper>
      <DetailsWrapper>
      <Button variant="outlined">Contact me!</Button>
      </DetailsWrapper>
    </>
  );
}

export default ProfilePage;
