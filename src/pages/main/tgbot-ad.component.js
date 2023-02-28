import React from "react";
import styled from "styled-components";
import services from "../../assets/images/services.png"
import code from "../../assets/images/qr-code.png"
import vector from "../../assets/images/vector.png"
import points from "../../assets/images/points.png"
import {ConnectButton} from "../../components/buttons/connect-button";


const AdBlock = () => {
    return (
        <AdWrapper>
            <AdHeader>
                Онлайн зручніше
            </AdHeader>
            <ContentWrapper>
                <QrWrapper>
                    <QrHeader>Скануй цей QR код</QrHeader>
                    <QrCode src={code} alt="QR-code"/>
                    <QrText>або натискай, щоб перейти за посиланням</QrText>
                    <QrButton>
                        <QrButtonText>Посилання </QrButtonText>
                    </QrButton>
                </QrWrapper>
                <VectorWrapper> та користуйся послугами зручно
                    <Vector src={vector} alt="vector"/>
                </VectorWrapper>
                <Points src={points} alt="points"/>
                <Services src={services} alt="services"/>
            </ContentWrapper>
        </AdWrapper>
    )
}


const AdWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 80px;
  margin-bottom: 102px;
  height: 750px;
  align-items: center;
`;

const AdHeader = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 74px;
  margin-bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 68px;
  color: #0D316D;
  height: 138px;
`;


const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1069px;
`;

const QrWrapper = styled.div`
  width: 267px;
  align-items: flex-start;
`;


const QrHeader = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #0D316D;
`;

const QrCode = styled.img`
  text-align: center;
  width: 197px;
  height: 238px;
`;

const QrText = styled.div`
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #0D316D;
  flex-wrap: nowrap;
`;

const QrButton = styled(ConnectButton)`
  margin-top: 30px;
  background-color: #F1B634;
  width: 206px;
  height: 48px;
`;

const QrButtonText = styled.div`
  width: 126px;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`;


const VectorWrapper = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
`;

const Services = styled.img`
  width: 238px;
  height: 454px;
`;

const Points = styled.img`
  width: 9px;
  height: 450px;
  display: flex;

`;
const Vector = styled.img`
  margin-top: 37px;
`;

export default AdBlock;