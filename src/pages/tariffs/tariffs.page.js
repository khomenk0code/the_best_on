import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";
import Modal from "../../components/modal/modal";
import {YellowButtonText, YellowConnect} from "../../components/buttons/yellow-connect";


export const TariffsPage = () => {
    return (
        <div>
            <Header/>
            <Tariff>Домашний</Tariff>
            <ConnectWrapper>
                <Modal/>
                <ContactsButton>
                    <YellowButtonText>Підключитися</YellowButtonText>
                </ContactsButton>
            </ConnectWrapper>

            <Footer/>
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
`
const ContactsButton = styled(YellowConnect)`
  margin-top: 30px;
  margin-right: 606px;
  margin-bottom: 100px;

`

