import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/Slide1.jpg"
import slide2 from "../../assets/images/Slide2.jpg"
import slide3 from "../../assets/images/Slide3.jpg"

export const SliderBar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src={slide1} alt=""/>
                </div>
                <div>
                    <img src={slide2} alt=""/>
                </div>
                <div>
                    <img src={slide3} alt=""/>
                </div>
            </Slider>
        </>
    )

}



export default SliderBar;