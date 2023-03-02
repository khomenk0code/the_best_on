import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import {Connect, HeaderButtonText} from "../buttons/connect";
import {useHttp} from "../../hooks/http.hook";


function OfferCard({loadedCards}) {

    const {request} = useHttp();
    const [offers, setOffers] = useState([])

    useEffect(() => {
        request(`http://localhost:3003/offers?_limit=${loadedCards}`)
            .then(data => setOffers(data))
            .catch(() => console.log('err'))

    }, [loadedCards, request])

    return (
        <>
            {offers.map((offers) => {
                return (

                    <OfferCardWrapper key={offers.id}>
                        <OfferName>{offers.name}</OfferName>
                        <OfferDesc>{offers.desc}</OfferDesc>
                        <OfferImage src={offers.img} alt={offers.name}/>
                        <OfferButton>
                            <HeaderButtonText>Детальнiше</HeaderButtonText>
                        </OfferButton>
                    </OfferCardWrapper>

                );
            })}
        </>
    )
}

const OfferCardWrapper = styled.div`
  display: flex;
  width: 305px;
  height: 521px;
  border: 1px solid #0D316D;
  border-radius: 15px;
  flex-direction: column;
  margin-bottom: 50px;
`;

const OfferName = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  margin-top: 50px;
`;

const OfferDesc = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
`;

const OfferImage = styled.img`
  margin: 33px 29px 0 29px;
  width: 246px;
  height: 189px;
  border-radius: 10px;
`;

const OfferButton = styled(Connect)`
  &:hover {
    cursor: pointer;
    background: #F1B634;
  }

  margin: auto 33px 50px 33px;
`;


export default React.memo(OfferCard);

