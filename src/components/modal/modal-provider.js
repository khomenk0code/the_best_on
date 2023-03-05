import React, {useState} from "react";
import ModalContext from "./modal-context";

const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <ModalContext.Provider value={{showModal, handleCloseModal, handleOpenModal}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;