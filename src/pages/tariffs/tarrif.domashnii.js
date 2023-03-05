import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";
import ConnectForm from "../../components/forms/connect-form";



export const TarrifDomashnii = () => {



    return (
        <div>
            <Header/>
            <Tariff>Домашний</Tariff>
            <ConnectWrapper>
                <ConnectForm/>
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
  margin-bottom: 115px;
`


