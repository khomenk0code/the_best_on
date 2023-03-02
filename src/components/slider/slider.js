import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/arrow-l.svg"
import RightArrow from "../../assets/images/arrow-r.svg"
import "./arrows.css"
import styled from "styled-components";
import {YellowConnect, YellowButtonText} from "../buttons/yellow-connect";
import {useHttp} from "../../hooks/http.hook";
import {useEffect} from "react";


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
        <div>
            <Slider {...settings} >
                {slides.map((slides) => {
                    return (
                        <SlideWrapper key={slides.id}>
                            <SlideImage src={slides.src} alt={`Slide ${slides.id}`}/>
                            <SlideTitle>{slides.title}</SlideTitle>
                            <SlideDescription>{slides.desc}</SlideDescription>
                            <SliderButton onClick={modalOpen}>
                                <YellowButtonText>Підключитися</YellowButtonText>
                            </SliderButton>
                        </SlideWrapper>
                    );
                })}
            </Slider>
        </div>

    );
}
const SliderButton = styled(YellowConnect)`
  position: absolute;
  width: 239px;
  height: 48px;
  left: 186px;
  top: 317px;
`;



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

export default React.memo(MainSlider)