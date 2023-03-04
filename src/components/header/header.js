import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";
import {Button, BUTTON_TYPES} from "../buttons/button";

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
                <Button onClick={modalOpen} text="Підключитися" type={BUTTON_TYPES.primaryOutline}/>
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
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1300px;
  margin-bottom: 102px;

  @media (max-width: 1366px) {
    min-width: auto;
    justify-content: space-around;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 30px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  width: 393px;
  height: 23px;

  @media (max-width: 1366px) {
    width: auto;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    height: auto;
  }
`;

const Link = styled.a`
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

  @media (max-width: 1366px) {
    font-size: 18px;
    line-height: 21px;
    height: 21px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    height: 19px;
    margin-bottom: 10px;
    width: auto;
  }
`;

const Logo = styled.img`
  height: 42px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default Header;
