import styled from "styled-components";

const SliderFooter = () => {

    return (
        <SliderFooterWrapper>
            <TextContainer>
                <SliderText>
                    <SliderTextPrefix>до</SliderTextPrefix>1000
                </SliderText>
                <SliderText>
                    <SliderTextPrefix>від</SliderTextPrefix>100
                </SliderText>
                <SliderText>
                    <SliderTextPrefix>вже</SliderTextPrefix>14
                </SliderText>
            </TextContainer>
            <TextBottom>
                <SliderTextMb> мбіт/с </SliderTextMb>
                <SliderTextUah> грн/міс </SliderTextUah>
                <div> років на ринку</div>
            </TextBottom>
        </SliderFooterWrapper>
    );
};

const SliderFooterWrapper = styled.div`
  margin: 66.5px 10% 102px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: 100px;
    background: #F5F8FD;
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 0;
    justify-content: center;

  }
`;

const TextContainer = styled.div`
  width: 80%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    height: 0;
  }
`;

const SliderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 33%;
  max-width: 160px;
  height: 61px;
  font-size: 5vw;
  color: #f1b634;
  @media (min-width: 768px) {
    width: 160px;
    font-size: 50px;
  }
`;

export const SliderTextPrefix = styled.div`
  font-size: 4vw;
  line-height: 28px;
  color: #0d316d;
  white-space: nowrap;
  margin-right: 10px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const SliderTextMb = styled.div`
  margin-left: 10%;
  font-size: 3vw;
  @media (min-width: 768px) {
    margin-left: 75px;
    font-size: 24px;
  }
`;

const SliderTextUah = styled.div`
  margin-left: 5%;
  font-size: 3vw;
  @media (min-width: 768px) {
    margin-left: 10px;
    font-size: 24px;
  }
`;

const TextBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 763px;
  font-size: 4vw;
  line-height: 28px;
  color: #0d316d;
  @media (min-width: 768px) {
    width: 763px;
    font-size: 24px;
  }
`;

export default SliderFooter;
