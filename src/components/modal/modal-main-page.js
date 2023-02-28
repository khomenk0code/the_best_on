import React from "react";
import {YellowConnect, YellowButtonText} from "../buttons/yellow-connect";
import Modal from "./modal";
import styled from "styled-components";


const ModalMainPage = () => {
    return (
        <>
            <Modal/>
            <YellowConnect1>
                <YellowButtonText>Підключитися</YellowButtonText>
            </YellowConnect1>
        </>
    )
}

const YellowConnect1 = styled(YellowConnect)`
  margin-top: 50px;
`

export default ModalMainPage;