import React, {useState} from "react";
import ModalContext from "./modal-context";

const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <ModalContext.Provider value={{showModal, setShowModal, handleOpenModal}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;