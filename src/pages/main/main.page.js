import React from "react";
import Header from "../../components/header/header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../../components/slider/slider";
import slide1 from "../../assets/images/slide1.png"
import SliderFooter from "./slider.component"
import Tariffs from "./tariff.component";
import AdBlock from "./tgbot-ad.component"


const slides = [
    {src: slide1, title: 'Оптичний інтернет', desc: 'Швидкий інтернет, який працює навіть без світла!'},
    {src: slide1, title: 'Приведи друга', desc: 'Рекомендуй наші послуги та отримай бонус!'},
    {src: slide1, title: 'Безкоштовний мiсяць', desc: 'При першому пiдключеннi 1-ий мiсяць безкоштовно! '},
]





export const MainPage = () => {
    return (
        <div>
            <Header/>
            <MainSlider title="Slider" slides={slides}/>
            <SliderFooter/>
            <Tariffs/>
            <AdBlock/>
        </div>
    )
}