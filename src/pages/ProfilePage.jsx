import React from "react";
import styled from "styled-components";
import { FcRating } from "react-icons/fc";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/material/Chip";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

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
  margin: 80px 50px;
`;

const ProfileContact = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
  text-align: left;
`;

const ProfileData = styled.p`
  font-size: 20px;
  margin: 10px 0;
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
          src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
          alt="Profile picture"
        />
        <ProfileName>Yarin Levy</ProfileName>
        <ProfileBio>Web developer and coffee addict.</ProfileBio>
        <CoinWrapper>
          <CoinIcon />
          <CoinCount>15</CoinCount>
        </CoinWrapper>
      </ProfileWrapper>
      <DetailsWrapper>
        <ProfileContact>
          Email: <ProfileData>john.doe@example.com</ProfileData>
        </ProfileContact>
        <ProfileContact>
          Country: <ProfileData>Israel</ProfileData>
        </ProfileContact>
        <ProfileContact>Circles:</ProfileContact>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Culinary Circle" />
          {/* <Chip color="primary" label="Love Circle" /> */}
        </Stack>
      </DetailsWrapper>
    </>
  );
}

export default ProfilePage;
