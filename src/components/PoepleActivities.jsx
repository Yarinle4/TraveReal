import React from "react";
import "./ActivitiesCards.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";


const People = (props) => {
  const navigate = useNavigate();

  return (
<div className="people" id={props.idPeople}>
  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    {props.users.map((user, index) => {
      return (
        <Box
          key={index}
          sx={{
            width: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 5px',
          }}
        >
          <p>
            <Avatar
              sx={{ width: 80, height: 80, mb: 1 }}
              alt="Person 1"
              src={user.profilePictureUrl}
              onClick={() => navigate("/HostProfilePage", { state: { uid: user.uid, curCircle: props.curCircle } })}
            />
          </p>
          <p>
            <Typography
              sx={{
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
              align="center"
            >
              {user.firstName + ' ' + user.lastName}
            </Typography>
          </p>
        </Box>
      );
    })}
  </Box>
</div>

  );
};
export default People;
