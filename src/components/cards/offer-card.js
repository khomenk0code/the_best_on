import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {useHttp} from "../../hooks/http.hook";
import {Button, BUTTON_TYPES} from "../buttons/button";


function OfferCard({loadedCards}) {

    const {request} = useHttp();
    const [offers, setOffers] = useState([])

    useEffect(() => {
        request(`http://localhost:3001/offers?_limit=${loadedCards}`)
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
                        <Button text="Детальнiше" type={BUTTON_TYPES.primaryOutline}/>
                    </OfferCardWrapper>

                );
            })}
        </>
    )
}

const OfferCardWrapper = styled.div`
  display: flex;
  width: 305px;
  height: 522px;
  border: 1px solid #0D316D;
  border-radius: 15px;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-evenly;
`;

const OfferName = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;

`;

const OfferDesc = styled.div`

  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
`;

const OfferImage = styled.img`

  width: 246px;
  height: 189px;
  border-radius: 10px;

`;




export default React.memo(OfferCard);

