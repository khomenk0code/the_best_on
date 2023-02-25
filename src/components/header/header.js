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
                    <Logo src={logo} alt="The Best-On"/>
                <LinksWrapper>
                    <Link>Тарифи</Link>
                    <Link>Послуги</Link>
                    <Link>Оплата</Link>
                    <Link>Контакти</Link>
                </LinksWrapper>
                <ConnectButton onClick={handleButtonClick}>
                    <HeaderButton>Підключитися</HeaderButton>
                </ConnectButton>

            </HeaderContainer>
        </Wrapper>
    )
}

const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const  HeaderContainer = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1300px;
`

const  LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  width: 393px;
  height: 23px;

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
  font-size: 24px;
  line-height: 28px;
`
const Logo = styled.img`
  height: 42px;
`;




export default Header;