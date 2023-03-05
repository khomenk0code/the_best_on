import React, {useContext} from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
import ModalContext from "../../components/modal/modal-context";


const Contacts = () => {

    const {showModal, setShowModal, handleOpenModal} = useContext(ModalContext);
    return (
        <div>
            <Header handleOpenModal={handleOpenModal}/>
            <h1>Контакти</h1>
            <Footer/>
            <Modal showModal={showModal} handleModalClose={() => setShowModal(false)}/>
        </div>
    )
}


export default Contacts;