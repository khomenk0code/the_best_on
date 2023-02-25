import React from "react";
import Header from "../components/header/header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../components/slider/slider";


const slides = [
    {src: "../../assets/images/slide1.jpg"},
    {src: "../../assets/images/slide2.jpg"},
    {src: "../../assets/images/slide3.jpg"},
]

export const MainPage = () => {

    return (
        <div>
            <Header/>
            <MainSlider title="Slider" slides={slides}/>
        </div>
    )
}