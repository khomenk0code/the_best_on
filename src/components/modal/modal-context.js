import React from "react";

const ModalContext = React.createContext({
    showModal: false,
    setShowModal: () => {
    },
});

export default ModalContext;