import burgerLogo from "../../assets/images/logo-burger.png";
import cross from "../../assets/images/cross-burger.png";
import styled from "styled-components";
import React from "react";

const BurgerMenu = ({isBurgerMenuShown, toggleBurgerMenu}) => {


    return (
        <Wrapper isBurgerMenuShown={isBurgerMenuShown}>
            <LogoWrapper>
                <BurgerLogoWrapper>
                    <BurgerLogo src={burgerLogo}/>
                </BurgerLogoWrapper>
                <CrossWrapper>
                    <Cross src={cross} onClick={toggleBurgerMenu}/>
                </CrossWrapper>
            </LogoWrapper>
            <MenuWrapper>
                <Link href="/">Головна</Link>
                <Link>Тарифи</Link>
                <Link>Послуги</Link>
                <Link>Оплата</Link>
                <Link href="/contacts">Контакти</Link>
            </MenuWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 100%;
  height: 435px;
  background: #0d316d;
  align-content: center;
  align-items: center;
  position: absolute;
  top: ${({isBurgerMenuShown}) => (isBurgerMenuShown ? "0" : "-435px")};
  left: 0;
  transition: 0.5s top ease-in;
  z-index: 9999;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`

const BurgerLogoWrapper = styled.div`
  margin-top: 7px;
  margin-left: 20px;
  width: 59px;
  height: 59px;
`

const BurgerLogo = styled.img`
  width: 100%;
  height: 100%;
`

const CrossWrapper = styled.div`
  width: 50px;

  margin: 22px;
`

const Cross = styled.img`
  width: 100%;
  height: 31px;

`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 186px;
  justify-content: space-between;

  margin-top: 51px;
  justify-items: center;
`;

const Link = styled.a`
  white-space: nowrap;
  list-style-type: none;
  height: 23px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
`

export default React.memo(BurgerMenu);
