import React from "react";
import TariffCard from "../../components/cards/tariff-card";
import styled from "styled-components";

const Tariffs = () => {
    return (
        <TariffsWrapper>
            <TariffsHeader>
                Тарифи
            </TariffsHeader>
            <CardsWrapper>
                <TariffCard title="Tariffs"/>
            </CardsWrapper>
        </TariffsWrapper>
    )
}

const TariffsWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  margin-bottom: 50px;
  height: 583px;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TariffsHeader = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 68px;
  color: #0D316D;
  height: 138px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 50px;
    height: auto;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  height: 445px;
  width: 1280px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    width: 100%;
  }
`;


export default React.memo(Tariffs);
