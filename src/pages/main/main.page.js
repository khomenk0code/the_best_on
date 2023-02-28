import React, {useState} from "react";
import Header from "../../components/header/header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../../components/slider/slider";
import slide1 from "../../assets/images/slide1.png"
import SliderFooter from "./slider.component"
import Tariffs from "./tariff.component";
import AdBlock from "./tgbot-ad.component"
import Offers from "./promo-offers.component";
import Footer from "../../components/footer/footer";
import ModalMainPage from "../../components/modal/modal-main-page";
import styled from "styled-components";
import cross from "../../assets/images/cross.png"


const slides = [
    {src: slide1, title: 'Оптичний інтернет', desc: 'Швидкий інтернет, який працює навіть без світла!'},
    {src: slide1, title: 'Приведи друга', desc: 'Рекомендуй наші послуги та отримай бонус!'},
    {src: slide1, title: 'Безкоштовний мiсяць', desc: 'При першому пiдключеннi 1-ий мiсяць безкоштовно! '},
]

export const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Header setShowModal={setShowModal}/>
            <MainSlider title="Slider" setShowModal={setShowModal} slides={slides}/>
            <SliderFooter/>
            <Tariffs/>
            <AdBlock/>
            <Offers/>
            <Footer/>
            {showModal && (
                <MainModalWrapper onClick={handleModalClose}>
                    <BgWrapper onClick={e => e.stopPropagation()}>
                        <Cross src={cross} onClick={handleModalClose}/>
                        <ModalMain/>
                    </BgWrapper>
                </MainModalWrapper>
            )}
        </>
    )
}


const MainModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BgWrapper = styled.div`
  position: relative;
  height: 1050px;
  width: 950px;
  background-color: #fff;
  padding: 20px;
  border: 2px solid #F1B634;;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const Cross = styled.img`
  width: 50px;
  height: 31px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 15px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }

`;

const ModalMain = styled(ModalMainPage)`


`