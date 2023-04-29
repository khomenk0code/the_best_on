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
            </LogoWrapper>
            <MenuWrapper>
                <MenuTitle>Тарифы</MenuTitle>
                <a href="/tariffs/bazovii"><MenuLi>Базовий</MenuLi></a>
                <a href="/tariffs/domashnii"><MenuLi>Домашній</MenuLi></a>
                <a href="/tariffs/dlya-biznesa"> <MenuLi>Для бізнесa</MenuLi></a>
                <a href="/tariffs/bezlim"> <MenuLi>Безліміт</MenuLi></a>
            </MenuWrapper>
            <MenuWrapper>
                <MenuTitle>Меню</MenuTitle>
                <a href="/services"> <MenuLi>Послуги</MenuLi></a>
                <a href="/payment"> <MenuLi>Оплата</MenuLi></a>
                <a href="/contacts"> <MenuLi>Контакти</MenuLi></a>
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
            <LogoText>© 2009 - 2023 | the best on</LogoText>
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
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0;
    height: auto;
    flex-direction: column;
    display: flex;
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
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 30px 0;
  }
`;

const LogoText = styled.div`
  margin-top: 50px;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  position: absolute;
  bottom: 20px;
  @media screen and (max-width: 768px) {
    bottom: 20px;
  }
`;


const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  height: 186px;
  justify-content: space-between;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
    height: auto;
    display: flex;
    align-items: center;
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
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
    font-size: 16px;
  }


  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
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
    margin-bottom: 20px;
  }
`;

const ContactsWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
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
