import React from "react";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ReactCardSlider = (props) => {
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

  const navigateToPage = (destination) => {
    navigate(destination, {
      state: {
        curCircle: props.curCircle,
        curCity: props.curCity,
      },
    });
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
            // <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>TipsPage
            <div
              className="slider-card"
              key={index}
              onClick={() => navigateToPage(slide.destination)}
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
              <p className="slider-card-description">{slide.phone}</p>
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
export default ReactCardSlider;
