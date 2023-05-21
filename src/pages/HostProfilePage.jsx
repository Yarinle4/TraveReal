import React from "react";
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

function ProfilePage() {
  const navigate = useNavigate();

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
          src={avatarPic}
          alt="Profile picture"
        />
        <ProfileName>Yarin Levy</ProfileName>
        <ProfileBio>Web developer and coffee addict.</ProfileBio>
        <ProfileBio>Talk to me about... NBA and Youtube</ProfileBio>
      </ProfileWrapper>
      <DetailsWrapper>
        <ProfileContact>
        Country: <ProfileData>Israel</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Home Town: <ProfileData>Jerusalem</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Age: <ProfileData>25</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Gender: <ProfileData>Prefer not to say</ProfileData>
        </ProfileContact>
        <ProfileContact>
        Profession: <ProfileData>CS Student</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Languges: <ProfileData>English, Hebrew</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Email: <ProfileData>john.doe@example.com</ProfileData>
        </ProfileContact>
        <ProfileContact>Hobbies:</ProfileContact>
        <Stack useFlexGap="true" direction="row" spacing={1}>
          <Chip color="primary" label="Dogs" />
          <Chip color="primary" label="Math" />
          <Chip color="primary" label="Cooking" />
          {/* <Chip color="primary" label="Love Circle" /> */}
        </Stack>
        <ProfileContact></ProfileContact>
        <ProfileContact>Circles:</ProfileContact>
        <Stack useFlexGap="true"  direction="row" spacing={1}>
          <Chip color="primary" label="Culinary Circle" />
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