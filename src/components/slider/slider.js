import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/arrow-l.svg"
import RightArrow from "../../assets/images/arrow-r.svg"
import "./arrows.css"
import styled from "styled-components";


export default function MainSlider({slides}) {


    const SlickArrowLeft = ({currentSlide, slideCount, ...props}) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );


    const SlickArrowRight = ({currentSlide, slideCount, ...props}) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,
        adaptiveHeight: true
    };

    return (
        <div>
            <Slider {...settings} >
                {slides.map((slide, id) => {
                    return (
                        <StyledWrapper key={id}>
                            <StyledImage src={slide.src} alt={`Slide ${id}`}/>
                            <div>asdasdasd</div>
                        </StyledWrapper>
                    );
                })}
            </Slider>
        </div>

    );
}

const StyledImage = styled.img`
  height: 440px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const StyledWrapper = styled.div`
  height: 440px;
  width: 100%;
  position: relative;
`;