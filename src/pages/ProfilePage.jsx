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
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
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
  const [stars, setStars] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadStars = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user ? user.uid : "";
        const userRef = doc(db, "users", "user_" + uid);

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
        <ProfileImage src={avatarPic} alt="Profile picture" />
        <ProfileName>Yarin Levy</ProfileName>
        <ProfileBio>Web developer and coffee addict.</ProfileBio>
        <CoinWrapper>
          <CoinIcon />
          <CoinCount>{stars}</CoinCount>
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