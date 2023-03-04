import React, {useCallback, useState, useEffect} from "react";
import OfferCardList from "../../components/cards/offer-card";
import styled from "styled-components";
import {useHttp} from "../../hooks/http.hook";
import {Button, BUTTON_TYPES} from "../../components/buttons/button";


const Offers = () => {

    const {request} = useHttp();
    const [loadedCards, setLoadedCards] = useState(4)
    const [totalCards, setTotalCards] = useState(0);
    const [disableLoadMoreButton, setDisableLoadMoreButton] = useState(false);

    useEffect(() => {
        if (loadedCards >= totalCards) {
            setDisableLoadMoreButton(true);
        } else {
            setDisableLoadMoreButton(false);
        }
    }, [loadedCards, totalCards]);

    useEffect(() => {
        request(`http://localhost:3001/offers`)
            .then(data => setTotalCards(data.length))
            .catch(() => console.log('err'))
    }, [request])

    const handleLoadMore = useCallback(() => {
        setLoadedCards(prevCount => prevCount + 4);
    }, []);

    return (


        <OffersWrapper>
            <OffersHeader>
                Вигідні пропозиції
            </OffersHeader>
            <CardsWrapper>
                {loadedCards &&
                    <OfferCardList loadedCards={loadedCards} setLoadedCards={setLoadedCards} title="Tariffs"/>}
            </CardsWrapper>
            <Button
                disabled={disableLoadMoreButton}
                onClick={handleLoadMore}
                text="Всі пропозиції"
                type={BUTTON_TYPES.primaryOutline}
            />
        </OffersWrapper>
    )
}

const OffersWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  margin-bottom: 102px;
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
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1280px;

  @media (max-width: 1280px) {
    width: 960px;
  }

  @media (max-width: 960px) {
    width: 640px;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 0 16px;
  }
`;


export default React.memo(Offers);