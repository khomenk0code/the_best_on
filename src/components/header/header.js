import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";
import mobileLogo from "../../assets/images/logo-mobile.png"
import {Button, BUTTON_TYPES} from "../buttons/button";
import {useState} from 'react';


const Header = ({handleOpenModal}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Wrapper>
            <HeaderContainer>
                {/*<Burger*/}
                <a href="/"><Logo src={logo} alt="The Best-On"/></a>
                <MobileLogo src={mobileLogo} alt="The Best-On"/>
                <LinksWrapper isOpen={isOpen}>
                    <Link href="/">Головна</Link>
                    <Link>Тарифи</Link>
                    <Link>Послуги</Link>
                    <Link>Оплата</Link>
                    <Link href="/contacts">Контакти</Link>
                </LinksWrapper>
                <HeaderButton onClick={handleOpenModal} text="Підключитися" type={BUTTON_TYPES.primaryOutline}/>
                <BurgerMenuButton onClick={toggleBurgerMenu} isOpen={isOpen}>
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


  @media (max-width: 1366px) {
    padding: 0 30px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1300px;
  margin-bottom: 102px;


  @media (max-width: 1366px) {
    min-width: auto;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    height: auto;
    margin: 8px 20px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  height: 23px;

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
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px 30px;
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


  @media (max-width: 1366px) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
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
    border-radius: 79.5625px;
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