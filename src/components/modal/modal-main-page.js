import React from "react";
import styled from "styled-components";
import {YellowConnect, YellowButtonText} from "../buttons/yellow-connect";


const ModalMainPage = () => {
    return (
        <ModalWrapper>
            <HeaderText>Заявка на підключення</HeaderText>
            <Description>Залиши свої данні та ми зателефонуємо, щоб узгодити час та дату підключення.</Description>
            <ContactForm>
                <ContactFormTitle>Ваша адреса</ContactFormTitle>
                <InputSmallWrapper>
                    <InputSmall type="text" placeholder="Область"></InputSmall>
                    <InputSmall type="text" placeholder="Мiсто"></InputSmall>
                </InputSmallWrapper>
                <InputSmallWrapper>
                    <InputSmall type="text" placeholder="Вулиця"></InputSmall>
                    <InputSmall type="text" placeholder="Будинок"></InputSmall>
                </InputSmallWrapper>
                <ContactFormTitle>Вашi контакти</ContactFormTitle>
                <InputPIB type="text" placeholder="ПІБ"></InputPIB>
                <InputSmallWrapper>
                    <InputSmall type="text" placeholder="e-mail"></InputSmall>
                    <InputSmall type="text" placeholder="+38(099)..."></InputSmall>
                </InputSmallWrapper>
                <InputNote type="text" placeholder="Примiтки"></InputNote>
                <ContactsButton>
                    <YellowButtonText>Підключитися</YellowButtonText>
                </ContactsButton>
            </ContactForm>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 847px;
  margin-bottom: 100px;
`

const HeaderText = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 50px;
  color: #0d316d;
`
const Description = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  text-align: center;
  margin-top: 30px;

`
const ContactFormTitle = styled.div`
  margin-bottom: 30px;
  margin-top: 70px;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: #0D316D;

`
const ContactForm = styled.div`
  height: 649px;
  width: 847px;
`

const InputPIB = styled.input`
  width: 845px;
  border-radius: 10px;


`

const InputSmallWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
`

const InputSmall = styled.input`
  width: 412px;
`


const InputNote = styled.input`
  width: 845px;
  height: 130px;
  margin-top: 25px;

  &::placeholder {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`

const ContactsButton = styled(YellowConnect)`
  margin-top: 25px;
  margin-left: 295px;
`

export default ModalMainPage;