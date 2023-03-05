import React, {useContext} from "react";
import Header from "../../components/header/header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../../components/slider/slider";
import SliderFooter from "./slider.component"
import Tariffs from "./tariff.component";
import AdBlock from "./tgbot-ad.component"
import Offers from "./promo-offers.component";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal"
import ModalContext from "../../components/modal/modal-context";


export const MainPage = () => {

    const {showModal, setShowModal, handleOpenModal} = useContext(ModalContext);

    return (
        <>
            <Header handleOpenModal={handleOpenModal}/>
            <MainSlider title="Slider" setShowModal={setShowModal}/>
            <SliderFooter/>
            <Tariffs/>
            <AdBlock/>
            <Offers/>
            <Footer/>
            <Modal showModal={showModal} handleModalClose={() => setShowModal(false)}/>
        </>
    )
}



