import React, {useState} from "react";
import styled from "styled-components";
import {SliderTextPrefix} from "../../pages/main/slider.component"
import {useEffect} from "react";
import {Button, BUTTON_TYPES} from "../buttons/button";
import db from "../../api/db/data";


export default function TariffCard() {

    const [tariffs, setTariffs] = useState([])


    useEffect(() => {
        const data = db.chain
            .get('tariffs')
            .value()
        setTariffs(data)
    }, [])


    return (
        <>
            {tariffs.map((tariffs) => {
                return (
                    <TariffCardWrapper key={tariffs.id}>
                        <TariffName>{tariffs.name}</TariffName>
                        <TariffPriceValue>{tariffs.value}</TariffPriceValue>
                        <TariffBottomText>грн/міс</TariffBottomText>
                        <TariffTextPrefix>до<TariffMaxPrice>{tariffs.maxmb}</TariffMaxPrice></TariffTextPrefix>
                        <TariffBottomText>мбіт/с</TariffBottomText>
                        <a href={tariffs.link}> <Button text="Підключитися" type={BUTTON_TYPES.primaryOutline}/></a>
                    </TariffCardWrapper>
                );
            })}
        </>
    )
}

const TariffCardWrapper = styled.div`
  display: flex;
  width: 305px;
  height: 445px;
  margin-right: 20px;
  border: 1px solid #0D316D;
  border-radius: 15px;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 235px;
    height: 341px;
  }
`;

const TariffName = styled.div`
  font-size: 24px;
  text-align: center;
  color: #0D316D;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 35px;
  }
`;

const TariffPriceValue = styled.div`
  font-size: 36px;
  color: #F1B634;
  margin-top: 30px;
  text-align: center;
  line-height: 68px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 27px;
  }
`;

const TariffTextPrefix = styled(SliderTextPrefix)`
  text-align: center;
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const TariffMaxPrice = styled.div`
  font-size: 24px;
  color: #F1B634;
  text-align: center;
  margin-left: 6px;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
  }
`;

const TariffBottomText = styled.div`
  font-size: 20px;
  color: #0D316D;
  text-align: center;
  margin-bottom: 37px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 35px;
  }
`;
