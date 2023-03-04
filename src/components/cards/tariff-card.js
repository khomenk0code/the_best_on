import React, {useState} from "react";
import styled from "styled-components";
import {SliderTextPrefix} from "../../pages/main/slider.component"
import {useHttp} from "../../hooks/http.hook";
import {useEffect} from "react";
import {Button, BUTTON_TYPES} from "../buttons/button";

export default function TariffCard() {
    const {request} = useHttp();
    const [tariffs, setTariffs] = useState([])


    useEffect(() => {
        request("http://localhost:3001/tariffs")
            .then(data => setTariffs(data))
            .catch(() => console.log('err'))

    }, [request])


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
                        <Button text="Підключитися" type={BUTTON_TYPES.primaryOutline}/>
                    </TariffCardWrapper>
                );
            })}
        </>
    )
}

const TariffCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border: 1px solid #0D316D;
  border-radius: 15px;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 305px;
    height: 445px;
  }
`;

const TariffName = styled.div`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #0D316D;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
    margin-top: 50px;
  }
`;

const TariffPriceValue = styled.div`
  font-size: 36px;
  line-height: 48px;
  color: #F1B634;
  margin-top: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    line-height: 68px;
    margin-top: 30px;
  }
`;

const TariffTextPrefix = styled(SliderTextPrefix)`
  text-align: center;
  display: flex;
  align-items: baseline;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const TariffMaxPrice = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: #F1B634;
  text-align: center;
  margin-left: 6px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

const TariffBottomText = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #0D316D;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 36px;
  }
`;
