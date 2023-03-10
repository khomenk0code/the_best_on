import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/arrow-l.svg"
import RightArrow from "../../assets/images/arrow-r.svg"
import "./arrows.css"
import styled from "styled-components";
import {useHttp} from "../../hooks/http.hook";
import {useEffect} from "react";
import {Button} from "../buttons/button";


function MainSlider({setShowModal}) {
    const PrevArrow = ({currentSlide, slideCount, ...props}) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const NextArrow = ({currentSlide, slideCount, ...props}) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const modalOpen = () => {
        setShowModal(true);
    }

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

    const {request} = useHttp();
    const [slides, setSlides] = useState([])


    useEffect(() => {
        request("http://localhost:3001/slides")
            .then(data => setSlides(data))
            .catch(() => console.log('err'))

    }, [request])


    return (
        <MainSliderWrapper>
            <Slider {...settings} >
                {slides.map((slides) => {
                    return (
                        <SlideWrapper key={slides.id}>
                            <SlideImage src={slides.src} alt={`Slide ${slides.id}`}/>
                            <SlideTitle>{slides.title}</SlideTitle>
                            <SlideDescription>{slides.desc}</SlideDescription>
                            <Button onClick={modalOpen} text="Підключитися"/>
                        </SlideWrapper>
                    );
                })}
            </Slider>
        </MainSliderWrapper>

    );
}

const MainSliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;


  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  height: 440px;
  position: relative;
  justify-content: center;
  padding-left: 12%;
  align-content: flex-start;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-left: 0;
    padding-right: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const SlideTitle = styled.h2`
  margin-top: 70px;
  font-weight: 400;
  font-size: 65px;
  color: #FFFFFF;
  margin-bottom: 47px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    font-size: 40px;
  }
`;

const SlideDescription = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  margin-bottom: 40px;
  width: 522px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
    width: 100%;
  }
`;


const SlideImage = styled.img`
  height: 440px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 768px) {
    height: auto;

  }
`;


export default React.memo(MainSlider)