import styled from "styled-components";
import logo from "../../assets/images/logo-footer.png"
import lifecell from "../../assets/images/lifecell.png"
import vodafone from "../../assets/images/vodafone.png"
import kyivstar from "../../assets/images/kyivstar.png"
import {Button, BUTTON_TYPES} from "../buttons/button";


const Footer = () => {


    return (
        <FooterWrapper>
            <LogoWrapper>
                <FooterLogo src={logo}/>
                <LogoText>© 2009 - 2023 | the best on</LogoText>
            </LogoWrapper>
            <MenuWrapper>
                <MenuTitle>Тарифы</MenuTitle>
                <MenuLi>Базовий</MenuLi>
                <a href="/tariffs/domashnii"><MenuLi>Домашній</MenuLi></a>
                <MenuLi>Для бізнесa</MenuLi>
                <MenuLi>Безліміт</MenuLi>
            </MenuWrapper>
            <MenuWrapper>
                <MenuTitle>Меню</MenuTitle>
                <MenuLi>Послуги</MenuLi>
                <MenuLi>Оплата</MenuLi>
                <MenuLi>Контакти</MenuLi>
                <MenuLi>Вигідні пропозиції</MenuLi>
            </MenuWrapper>
            <ButtonsWrapper>
                <a href="https://t.me/kh0menk0" target="_blank" rel="noopener noreferrer">
                    <Button text="Telegram" type={BUTTON_TYPES.secondaryOutline}/>
                </a>
                <a href="https://uk-ua.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <Button text="Facebook" type={BUTTON_TYPES.secondaryOutline}/>
                </a>
                <a href="https://www.instagram.com/khomenko.dev/" target="_blank" rel="noopener noreferrer">
                    <Button text="Instagram" type={BUTTON_TYPES.secondaryOutline}/>
                </a>
            </ButtonsWrapper>
            <ContactsWrapper>
                <MenuTitle> Контакт-центр</MenuTitle>
                <PhoneLi><ContactsOperatorImg src={lifecell}/>+38(093)9999999</PhoneLi>
                <PhoneLi><ContactsOperatorImg src={vodafone}/>+38(093)9999999</PhoneLi>
                <PhoneLi><ContactsOperatorImg src={kyivstar}/>+38(093)9999999</PhoneLi>
            </ContactsWrapper>

        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
  justify-content: space-evenly;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #0D316D;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 30px;
    justify-content: center; /* добавлено */
  }
`;

const FooterLogo = styled.img`
  width: 211px;
  height: 132px;
  display: flex;
  align-items: center;
  align-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const LogoText = styled.div`
  margin-top: 50px;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;


const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  height: 186px;
  justify-content: space-between;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
    height: auto;
  }
`;

const MenuTitle = styled.div`
  margin-bottom: 20px;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`;

const MenuLi = styled.li`
  white-space: nowrap;
  height: 23px;
  font-weight: 100;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  list-style: none;

  &:hover {
    cursor: pointer;
  }

`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 176px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const ContactsWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  justify-content: space-around;
`;

const PhoneLi = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
`

const ContactsOperatorImg = styled.img`
  height: 20px;
  margin-right: 15px;
`

export default Footer;
