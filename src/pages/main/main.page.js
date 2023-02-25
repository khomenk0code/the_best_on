import React from "react";
import Header from "../../components/header/header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../../components/slider/slider";
import slide1 from "../../assets/images/slide1.png"
import slide2 from "../../assets/images/slide2.jpg"
import slide3 from "../../assets/images/slide3.jpg"

const slides = [
    {src: slide1},
    {src: slide2},
    {src: slide3},
]

export const MainPage = () => {

    return (
        <div>
            <Header/>
            <MainSlider title="Slider" slides={slides}/>
        </div>
    )
}