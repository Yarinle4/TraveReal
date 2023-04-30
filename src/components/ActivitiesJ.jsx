import React from 'react';
import './ActivitiesCards.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const CardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        var slider = document.getElementById(props.idSlide);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        var slider = document.getElementById(props.idSlide);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div class="slider" id={props.idSlide}>
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                                <svg><AccessTimeRoundedIcon/></svg>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default CardSlider;