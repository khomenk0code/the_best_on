import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/arrow-l.svg"
import RightArrow from "../../assets/images/arrow-r.svg"
import "./arrows.css"
import styled from "styled-components";
import {ConnectButton} from "../buttons/connect-button";

export default function MainSlider({slides}) {
    const PrevArrow = ({currentSlide, slideCount, ...props}) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );


    const NextArrow = ({currentSlide, slideCount, ...props}) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        adaptiveHeight: true,
        draggable: false,
    };

    return (
        <div>
            <Slider {...settings} >
                {slides.map((slide, id) => {
                    return (
                        <SlideWrapper key={id}>
                            <SlideImage src={slide.src} alt={`Slide ${id}`}/>
                            <SlideTitle>{slide.title}</SlideTitle>
                            <SlideDescription>{slide.desc}</SlideDescription>
                            <SliderConnectButton>
                                <ConnectButtonText>Підключитися</ConnectButtonText>
                            </SliderConnectButton>
                        </SlideWrapper>
                    );
                })}
            </Slider>
        </div>

    );
}

const SliderConnectButton = styled(ConnectButton)`
  background: #F1B634;
  border-radius: 15px;
  position: absolute;
  width: 239px;
  height: 48px;
  left: 186px;
  top: 317px;
`;

const ConnectButtonText = styled.div`
  width: 159px;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`

const SlideTitle = styled.h2`
  position: absolute;
  left: 183px;
  font-weight: 400;
  font-size: 65px;
  color: #FFFFFF;
`
const SlideDescription = styled.div`
  position: absolute;
  width: 521px;
  height: 70px;
  left: 186px;
  top: 207px;
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
`;
const SlideImage = styled.img`
  height: 440px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const SlideWrapper = styled.div`
  height: 440px;
  width: 100%;
  position: relative;
`;

