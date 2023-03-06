import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";
import ConnectForm from "../../components/forms/connect-form";
import TariffCardBig from "../../components/cards/tariff-card-big"


export const Bazovii = () => {


    return (
        <div>
            <Header/>
            <TariffCardBig tariffId={1}/>
            <ConnectWrapper>
                <ConnectForm/>
            </ConnectWrapper>
            <Footer/>
        </div>
    )
}


const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 115px;
`


