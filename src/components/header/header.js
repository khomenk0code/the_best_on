import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";
import {ConnectButton} from "../buttons/connect-button"


const Header = () => {

    const handleButtonClick = () => {
        console.log('Button clicked');
    }

    return (
        <Wrapper>
            <HeaderContainer>
                <LinksWrapper>
                    <Link>Тарифи</Link>
                    <Link>Послуги</Link>
                    <Link>Оплата</Link>
                    <Link>Контакти</Link>
                </LinksWrapper>
                <ConnectButton onClick={handleButtonClick}>
                    <HeaderButton>Підключитися</HeaderButton>
                </ConnectButton>
                <LogoWrapper>
                    <Logo src={logo} alt="The Best-On"/>
                </LogoWrapper>
            </HeaderContainer>
        </Wrapper>
    )
}

const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 1304px;
  height: 84.5px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const  HeaderContainer = styled.div`
  width: 1284px;
  height: 64.5px;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const  LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  position: absolute;
  width: 393px;
  height: 23px;
  left: 327px;
  top: 25.5px;
`
const  Link = styled.a`
  width: 72px;
  height: 23px;
  // noinspection CssNoGenericFontName
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
  flex: none;
  order: 0;
  flex-grow: 0;
`


const HeaderButton = styled.a`
  width: 159px;
  height: 28px;
  // noinspection CssNoGenericFontName
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const  LogoWrapper = styled.div`
  height: 59px;
  width: 276px;
`
const Logo = styled.img`
  height: 42px;
`;




export default Header;