import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import styled from "styled-components";


export const Services = () => {


    return (
        <div>
            <Header/>
            <Wrapper>
                <Title>Послуги</Title>
            </Wrapper>
            <Footer/>
        </div>
    )
}

const Wrapper = styled.div`
  height: 1000px;
`

const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 65px;
  line-height: 89px;
  color: #0D316D;
  text-align: center;
  padding-bottom: 70px;
`;