import styled from "styled-components";
import {ConnectButton} from "../buttons/connect-button";
import logo from "../../assets/images/logo-footer.png"
import lifecell from "../../assets/images/lifecell.png"
import vodafone from "../../assets/images/vodafone.png"
import kyivstar from "../../assets/images/kyivstar.png"

const Footer = () => {


    return (
        <FooterWrapper>
            <LogoWrapper>
                <FooterLogo src={logo}/>
                <LogoText>© 2009 - 2023 | the best on</LogoText>
            </LogoWrapper>
            <MenuMainWrapper>
                <TariffsWrapper>
                    <Tariffs>Тарифы</Tariffs>
                    <Titles>
                        <TitlesLi>Базовий</TitlesLi>
                        <TitlesLi>Домашній</TitlesLi>
                        <TitlesLi>Для бізнесa</TitlesLi>
                        <TitlesLi>Безліміт</TitlesLi>
                    </Titles>
                </TariffsWrapper>
                <MenuWrapper>
                    <Menu>Меню</Menu>
                    <MenuLi>Послуги</MenuLi>
                    <MenuLi>Оплата</MenuLi>
                    <MenuLi>Контакти</MenuLi>
                    <MenuLi>Вигідні пропозиції</MenuLi>
                </MenuWrapper>
                <ButtonsWrapper>
                    <FooterButton>
                        <FooterButtonText>Telegram</FooterButtonText>
                    </FooterButton>
                    <FooterButton>
                        <FooterButtonText>Facebook</FooterButtonText>
                    </FooterButton>
                    <FooterButton>
                        <FooterButtonText>Instagram</FooterButtonText>
                    </FooterButton>
                </ButtonsWrapper>
                <ContactsWrapper>
                    <ContactsTitle> Контакт-центр</ContactsTitle>
                    <ContactsLi><ContactsOperatorImg src={lifecell}/>+38(093)9999999</ContactsLi>
                    <ContactsLi><ContactsOperatorImg src={vodafone}/>+38(093)9999999</ContactsLi>
                    <ContactsLi><ContactsOperatorImg src={kyivstar}/>+38(093)9999999</ContactsLi>
                </ContactsWrapper>
            </MenuMainWrapper>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 359px;
  background: #0D316D;
`;

const FooterLogo = styled.img`
  width: 211px;
  height: 132.85px;
  display: flex;
  align-items: center;
  align-content: center;
`;

const LogoWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.div`
  margin-top: 50px;
  font-style: inherit;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

const MenuMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TariffsWrapper = styled.div`
`;

const Tariffs = styled.div`
  margin-top: 96px;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  margin-left: 96px;
  color: #FFFFFF;
`;

const Titles = styled.ul`
`

const TitlesLi = styled.li`
  white-space: nowrap;
  margin-top: 15px;
  margin-left: 56px;
  width: 80px;
  list-style-type: none;
  height: 23px;
  font-weight: 100;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`

const MenuWrapper = styled.div`
`;

const Menu = styled(Tariffs)`
  margin-left: 129px;
`

const MenuLi = styled(TitlesLi)`
  margin-left: 125px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  margin-left: 201px;
  margin-top: 85px;
`;

const FooterButton = styled(ConnectButton)`
  border: 1px solid #FFFFFF;
  background: #0D316D;
  margin-bottom: 14px;

  &:hover {
    cursor: pointer;
    background: #F1B634;
  }
`

const FooterButtonText = styled.a`
  width: 105px;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`


const ContactsWrapper = styled.div`
`;

const ContactsTitle = styled(Tariffs)`
  margin: 95px 0 36px 190px;
`;

const ContactsLi = styled(TitlesLi)`
`

const ContactsOperatorImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  margin-left: 90px;
`

export default Footer;
