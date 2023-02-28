import React from "react";
import OfferCard from "../../components/cards/offer-card";
import styled from "styled-components";
import money from "../../assets/images/money.png"
import ded from "../../assets/images/ded.png"
import paradnii from "../../assets/images/paradnii.png"
import laught from "../../assets/images/tetki.png"
import {ConnectButton, HeaderButtonText} from "../../components/buttons/connect-button";


const offers = [
    {name: 'Приведи друга', desc: 'Рекомендуй наші послуги та отримай бонус', img: laught},
    {name: 'Виділений сервер', desc: 'Рекомендуй наші послуги та отримай бонус', img: paradnii},
    {name: 'Безкоштовний місяць', desc: 'Перший мiсяць без....', img: money},
    {name: 'Фіксована IP', desc: 'Рекомендуй наші послуги та отримай бонус', img: ded},
]


const Offers = () => {
    return (

        <OffersWrapper>
            <OffersHeader>
                Вигідні пропозиції
            </OffersHeader>
            <CardsWrapper>
                <OfferCard title="Tariffs" offers={offers}/>
            </CardsWrapper>
            <LoadAllOffersButton>
                <LoadAllOffersText>Всі пропозиції</LoadAllOffersText>
            </LoadAllOffersButton>
        </OffersWrapper>
    )
}

const OffersWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  margin-bottom: 102px;
  height: 783px;
  align-items: center;
`;

const OffersHeader = styled.h2`
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

const LoadAllOffersButton = styled(ConnectButton)`
  margin: 135px auto 0;
  display: block;
  background: #F1B634;
`;

const LoadAllOffersText = styled(HeaderButtonText)`
  color: #FFFFFF;
`;

export default Offers;