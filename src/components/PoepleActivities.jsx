import React from "react";
import "./ActivitiesCards.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const People = (props) => {
  const navigate = useNavigate();

  return (
    <div class="people" id={props.idPeople}>
      {props.users.map((user, index) => {
        return (
          <div>
            <p>
              <Avatar
                sx={{ width: 80, height: 80, mb: 1 }}
                alt="Person 1"
                src={user.profilePictureUrl}
                onClick={() => navigate("/HostProfilePage",{state: {uid: user.uid}})}
              />
            </p>
            <p>
              <Typography sx={{ fontSize: "100%" }} align="center" />
              {user.firstName + " " + user.lastName}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default People;
