import React, {useState} from "react";
import styled from "styled-components";
import logo from "../../assets/images/tetki.png"
import {useEffect} from "react";
import li from '../../assets/images/li-style.png'
import db from "../../api/db/data";


const TariffCardBig = ({tariffId}) => {
    const [tariffs, setTariffs] = useState([])


    useEffect(() => {
        const data = db.chain
            .get('tariffs')
            .find({id: tariffId})
            .value()
        setTariffs(data)
    }, [])


    return (
        <MainWrapper key={tariffs.id}>
            <TariffInfoWrapper>
                <TariffTitle> Тариф
                    <TariffName> «{tariffs.name}»</TariffName>
                </TariffTitle>
                <TariffUl>
                    <TariffLi>Цiна {tariffs.value} грн / міс</TariffLi>
                    <TariffLi>швидкивсть до {tariffs.maxmb} мбит/с</TariffLi>
                    <TariffLi>установка безкоштовна</TariffLi>
                    <TariffLi>абоненська підтримка безкоштовно</TariffLi>
                </TariffUl>
            </TariffInfoWrapper>
            <TariffImage src={logo}/>
        </MainWrapper>
    )


}


const MainWrapper = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 435px;
  margin-bottom: 82px;
`;


const TariffTitle = styled.h2`
  font-size: 65px;
  color: #0D316D;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

const TariffInfoWrapper = styled.div`

`;

const TariffName = styled.div`
  color: #F1B634;
  margin-left: 15px;
`;

const TariffLi = styled.li`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  background: url(${li}) no-repeat left center;
  padding-left: 19px;

`;

const TariffUl = styled.div`


`;

const TariffImage = styled.img`
  width: 522px;
  height: 307px;
  border-radius: 15px;
`


export default React.memo(TariffCardBig);