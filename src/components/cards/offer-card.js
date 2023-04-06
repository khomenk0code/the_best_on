import React, {useEffect, useState} from "react";
import styled from "styled-components";


import {Button, BUTTON_TYPES} from "../buttons/button";
import db from "../../api/db/data";


function OfferCard({loadedCards}) {


    const [offers, setOffers] = useState([])


    useEffect(() => {
        const data = db.chain
            .get("offers")
            .take(loadedCards)
            .value()
        setOffers(data)
    }, [loadedCards])

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

