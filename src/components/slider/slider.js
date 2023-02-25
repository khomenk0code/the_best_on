import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/arrow-l.svg"
import RightArrow from "../../assets/images/arrow-r.svg"


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
    };
    return (
        <div>
            <Slider {...settings} >
                {slides.map((slide, id) => {
                    return (
                        <div key={id}>
                            <img src={slide.src} alt={`Slide ${id}`}/>
                        </div>
                    );
                })}
            </Slider>
        </div>

    );
}