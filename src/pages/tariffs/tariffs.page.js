import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";


export const TariffsPage = () => {
    return (
        <div>
            <Header/>
            <Tariff>Домашний</Tariff>
            <ConnectWrapper>
                <Connect>Заявочка</Connect>
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
  justify-content: center;
`

const Connect = styled.div`
  display: flex;
  justify-content: center;
  width: 847px;
  height: 887px;
  border: 5px solid violet;
`;
