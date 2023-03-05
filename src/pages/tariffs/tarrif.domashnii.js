import React, {useContext} from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";
import ConnectForm from "../../components/forms/connect-form";
import Modal from "../../components/modal/modal";
import ModalContext from "../../components/modal/modal-context"


export const TarrifDomashnii = () => {

    const {showModal, setShowModal, handleOpenModal} = useContext(ModalContext);


    return (
        <div>
            <Header handleOpenModal={handleOpenModal}/>
            <Tariff>Домашний</Tariff>
            <ConnectWrapper>
                <ConnectForm/>
            </ConnectWrapper>
            <Footer/>
            <Modal showModal={showModal} handleModalClose={() => setShowModal(false)}/>
        </div>
    )
}

const Tariff = styled.div`
  height: 435px;
  border: 5px solid black;
  display: flex;
  justify-content: center;
`;

const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 115px;
`


