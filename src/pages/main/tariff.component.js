import React from "react";
import TariffCard from "../../components/cards/tarrif-card";
import styled from "styled-components";

const cards = [
    {name: 'Базовий', value: 150, maxmb: 100},
    {name: 'Домашній', value: 170, maxmb: 300},
    {name: 'Для бізнеса', value: 200, maxmb: 1000},
    {name: 'Безліміт', value: 250, maxmb: 1000},
]


const Tariffs = () => {
    return (
        <TariffsWrapper>
            <TariffsHeader>
                Тарифи
            </TariffsHeader>
            <CardsWrapper>
                <TariffCard title="Tariffs" cards={cards}/>
            </CardsWrapper>
        </TariffsWrapper>


    )
}

const TariffsWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  margin-left: 80px;
  margin-bottom: 102px;
  height: 583px;
  align-items: center;
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
`;

const CardsWrapper = styled.div`
  display: flex;
  height: 445px;
  width: 1280px;
  justify-content: space-between;
`;

export default Tariffs;