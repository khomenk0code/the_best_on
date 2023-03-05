import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";
import mobileLogo from "../../assets/images/logo-mobile.png"
import {Button, BUTTON_TYPES} from "../buttons/button";
import {useContext, useState} from 'react';
import BurgerMenu from "../header/header-burger"
import ModalContext from "../modal/modal-context";


const Header = () => {
    const {handleOpenModal} = useContext(ModalContext);
    const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false)


    const toggleBurgerMenu = () => {
        setIsBurgerMenuShown(!isBurgerMenuShown);
    }

    return (

        <Wrapper>

            <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isBurgerMenuShown={isBurgerMenuShown}>
            </BurgerMenu>

            <HeaderContainer>
                <a href="/"><Logo src={logo} alt="The Best-On"/></a>
                <MobileLogo src={mobileLogo} alt="The Best-On"/>
                <LinksWrapper>
                    <Link href="/">Головна</Link>
                    <Link>Тарифи</Link>
                    <Link>Послуги</Link>
                    <Link>Оплата</Link>
                    <Link href="/contacts">Контакти</Link>
                </LinksWrapper>
                <HeaderButton onClick={handleOpenModal} text="Підключитися" type={BUTTON_TYPES.primaryOutline}/>
                <BurgerMenuButton onClick={toggleBurgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </BurgerMenuButton>
            </HeaderContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 1366px) {
    padding-bottom: 20px;
    padding-top: 10px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1300px;
  margin-bottom: 102px;


  @media (max-width: 1366px) {
    min-width: 320px;
    margin: 0;

  }

  @media (max-width: 768px) {
    height: auto;
    margin: 0;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;


  @media (max-width: 1366px) {
    width: auto;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: ${({isOpen}) => isOpen ? '30px' : '0'};
    position: absolute;
    top: 84px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease-in-out;

    & a {
      color: #333;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      display: block;
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      position: static;
      height: ${({isOpen}) => isOpen ? 'auto' : '0'};
      opacity: 1;
      visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
      border: none;
      box-shadow: none;
      padding: 0;
      margin-bottom: 0;
      gap: 20px;

      & a {
        margin-bottom: 0;
      }
    }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  margin-right: 15px;
  color: #0D316D;
  cursor: pointer;


`;

const Logo = styled.img`
  width: 276px;
  height: 59px;


  @media (max-width: 768px) {
    display: none;

  }
`;

const MobileLogo = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const HeaderButton = styled(Button)`
  @media (max-width: 769px) {
    display: none;
  }
`

const BurgerMenuButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 31px;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: auto;


  @media (min-width: 769px) {
    display: none;
  }

  & span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 79px;
    background-color: ${({isOpen}) => isOpen ? 'transparent' : '#0D316D'};
    transition: all 0.3s ease-in-out;


    &:nth-child(1) {
      top: ${({isOpen}) => isOpen ? '50%' : '0'};
      transform: ${({isOpen}) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({isOpen}) => isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      bottom: ${({isOpen}) => isOpen ? '50%' : '0'};
      transform: ${({isOpen}) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Header;