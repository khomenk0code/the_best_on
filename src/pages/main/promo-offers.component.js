import React, {useCallback, useState, useEffect} from "react";
import OfferCardList from "../../components/cards/offer-card";
import styled from "styled-components";
import {Connect, HeaderButtonText} from "../../components/buttons/connect";
import {useHttp} from "../../hooks/http.hook";


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
        request(`http://localhost:3003/offers`)
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
            <LoadAllOffersButton disabled={disableLoadMoreButton} onClick={handleLoadMore}>
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
  width: 1280px;
  justify-content: space-between;
  flex-wrap: wrap
`;

const LoadAllOffersButton = styled(Connect)`
  display: ${props => props.disabled ? 'none' : 'block'};
  background: #F1B634;

  &:hover {
    cursor: pointer;
  }
`;

const LoadAllOffersText = styled(HeaderButtonText)`
  color: #FFFFFF;
`;

export default React.memo(Offers);