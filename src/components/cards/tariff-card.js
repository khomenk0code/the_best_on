import React, {useState} from "react";
import styled from "styled-components";
import {Connect, HeaderButtonText} from "../buttons/connect";
import {SliderTextPrefix} from "../../pages/main/slider.component"
import {useHttp} from "../../hooks/http.hook";
import {useEffect} from "react";

export default function TariffCard() {
    const {request} = useHttp();
    const [tariffs, setTariffs] = useState([])


    useEffect(() => {
        request("http://localhost:3002/tariffs")
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
                        <TariffButton>
                            <HeaderButtonText>Підключитися</HeaderButtonText>
                        </TariffButton>
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
  border: 1px solid #0D316D;
  border-radius: 15px;
  flex-direction: column;
  margin-bottom: 50px;
`;

const TariffName = styled.div`
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #0D316D;
  margin-top: 50px;
`;

const TariffPriceValue = styled.div`
  font-size: 50px;
  line-height: 68px;
  color: #F1B634;
  margin-top: 30px;
  text-align: center;
`;

const TariffBottomText = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: #0D316D;
  text-align: center;
`;

const TariffTextPrefix = styled(SliderTextPrefix)`
  text-align: center;
  display: flex;
  margin: 38px 110px 0 110px;
  align-items: baseline;
`

const TariffMaxPrice = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #F1B634;
  text-align: center;
  margin-left: 6px;
  margin-bottom: 4px;
`;

const TariffButton = styled(Connect)`
  margin: auto 33px 50px 33px;

  &:hover {
    cursor: pointer;
    background: #F1B634;
  }
`;



