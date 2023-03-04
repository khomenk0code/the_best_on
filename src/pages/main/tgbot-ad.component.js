import React from "react";
import styled from "styled-components";
import services from "../../assets/images/services.png"
import code from "../../assets/images/qr-code.png"
import vector from "../../assets/images/vector.png"
import points from "../../assets/images/points.png"
import {Button} from "../../components/buttons/button";


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
                    <Button text="Посилання"/>
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
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
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
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    margin-top: 40px;
`;


const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1069px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    min-width: 0;
  }

`;

const QrWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 270px;
  align-items: center;
  justify-content: space-around;


  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QrText = styled.div`
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #0D316D;
  flex-wrap: nowrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }

`;


const VectorWrapper = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;

  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Services = styled.img`
  width: 238px;
  height: 454px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Points = styled.img`
  width: 9px;
  height: 450px;
  display: flex;

  @media (max-width: 1200px) {
    display: none;
  }

`;
const Vector = styled.img`
  margin-top: 37px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export default AdBlock;