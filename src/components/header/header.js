import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";
import {Connect, HeaderButtonText} from "../buttons/connect"


const Header = ({setShowModal}) => {

    const modalOpen = () => {
        setShowModal(true);
    }

    return (
        <Wrapper>
            <HeaderContainer>
                <a href="/"><Logo src={logo} alt="The Best-On"/></a>
                <LinksWrapper>
                    <Link href={"/tariffs"}>Тарифи</Link>
                    <Link>Послуги</Link>
                    <Link>Оплата</Link>
                    <Link>Контакти</Link>
                </LinksWrapper>
                <Connect onClick={modalOpen}>
                    <HeaderButtonText>Підключитися</HeaderButtonText>
                </Connect>

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
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1300px;
  margin-bottom: 102px;
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
  &:hover {
    cursor: pointer;
  }

  width: 72px;
  height: 23px;
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const Logo = styled.img`
  height: 42px;

  &:hover {
    cursor: pointer;
  }
`;




export default Header;