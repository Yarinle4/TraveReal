import React from "react";
import "./ActivitiesCards.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    var slider = document.getElementById(props.idSlide);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    var slider = document.getElementById(props.idSlide);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const navigate = useNavigate();

  const handleCustomClick = (path, state) => {
    navigate(path, { state });
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div class="slider" id={props.idSlide}>
        {props.slides.map((slide, index) => {
          return (
            // <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}> להשתמש בזה אחכ
            <div
              className="slider-card"
              key={index}
              onClick={() =>
                handleCustomClick(props.path, {
                // navigate("/EventPage", {
                  // state: {
                    slide: slide,
                    slideId: slide.id,
                    curCircle: props.curCircle,
                    curCity: props.curCity,
                  // },
                })
              }
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.eventPictureUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="slider-card-title">{slide.name}</p>
              {/* <p className="slider-card-description">{slide.description}</p> */}
              <hr class="slant-line"></hr>
              <p className="slider-card-date">
                <AccessTimeRoundedIcon fontSize="small" sx={{ ml: 1, mr: 1 }} />
                {slide.date + " | " + slide.time}
              </p>
              {/* <p className="slider-card-points">
                                    <StarBorderRoundedIcon fontSize="medium" sx={{ml:0.9, mr:1}}/>{slide.points}</p> */}
              <p
                className="slider-card-location"
                style={{
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <LocationOnIcon fontSize="medium" sx={{ ml: 0.9, mr: 1 }} />
                {slide.location}
              </p>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
export default CardSlider;
