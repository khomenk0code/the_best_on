import cross from "../../assets/images/cross.png";
import ConnectForm from "../forms/connect-form";
import React, {useContext, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import ReactDOM from "react-dom";
import ModalContext from "./modal-context";

const Modal = () => {

    const {showModal, handleCloseModal} = useContext(ModalContext)

    const ModalPortal = ({children}) => {
        const modalRoot = document.getElementById("modal-root");
        const el = document.createElement("div");

        useEffect(() => {
            modalRoot.appendChild(el);
            return () => modalRoot.removeChild(el);
        }, [modalRoot, el]);

        return ReactDOM.createPortal(children, el);
    };

    const handleWrapperClick = (e) => {
        e.stopPropagation();
        handleCloseModal();
    }



    return (
        <>
            {showModal && (
                <ModalPortal>
                    <MainModalWrapper onClick={handleWrapperClick}>
                        <BgWrapper onClick={(e) => e.stopPropagation()}>
                            <Cross src={cross} onClick={handleCloseModal}/>
                            <ConnectForm buttonCentered/>
                        </BgWrapper>
                    </MainModalWrapper>
                </ModalPortal>
            )}
        </>
    );
};


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


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
  animation: ${fadeIn} 0.3s ease-in-out forwards;
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
  transform: scale(0.85);
  transform-origin: center center;
  transition: all 0.3s ease-in-out;

`;

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

export default React.memo(Modal);