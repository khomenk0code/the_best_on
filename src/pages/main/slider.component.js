import styled from "styled-components";

const SliderFooter = () => {

    return (
        <SliderFooterWrapper>
            <TextContainer>
                <SliderTextItem><SliderTextPrefix>до</SliderTextPrefix>1000</SliderTextItem>
                <SliderTextItem><SliderTextPrefix>від</SliderTextPrefix>100</SliderTextItem>
                <SliderTextItem><SliderTextPrefix>вже</SliderTextPrefix>14</SliderTextItem>
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
  margin: 66.5px 201px 102px 201px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const TextContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SliderTextItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 160px;
  height: 61px;
  font-size: 50px;
  color: #f1b634;
`;

export const SliderTextPrefix = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: #0d316d;
  white-space: nowrap;
  margin-right: 10px;
`;

const SliderTextMb = styled.div`
  margin-left: 75px;
`;

const SliderTextUah = styled.div`
  margin-left: 10px;
`;

const TextBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 763px;
  font-size: 24px;
  line-height: 28px;
  color: #0D316D;
`;


export default SliderFooter;