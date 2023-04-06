import React, {useCallback, useState, useEffect} from "react";
import OfferCardList from "../../components/cards/offer-card";
import styled from "styled-components";
import {Button, BUTTON_TYPES} from "../../components/buttons/button";
import db from "../../api/db/data";


const Offers = () => {


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
        const data = db.chain
            .get('offers')
            .value()
        setTotalCards(data.length)
    }, [])

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
            <StyledButton
                disabled={disableLoadMoreButton}
                onClick={handleLoadMore}
                text="Всі пропозиції"
                type={BUTTON_TYPES.primary}
            />
        </OffersWrapper>
    )
}

const StyledButton = styled(Button)`
  width: fit-content;
`

const OffersWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  margin-bottom: 102px;
  align-items: center;
`;

const OffersHeader = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  margin-bottom: 70px;
  color: #0D316D;
  @media (max-width: 768px) {
    justify-content: center;
    font-size: 28px;
    margin-bottom: 40px;

  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1280px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;


export default React.memo(Offers);