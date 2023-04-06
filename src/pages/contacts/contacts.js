import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import {Button} from "../../components/buttons/button";
import * as Yup from "yup";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import lifecell from "../../assets/images/lifecell.png";
import vodafone from "../../assets/images/vodafone.png";
import kyivstar from "../../assets/images/kyivstar.png";
import li from '../../assets/images/li-style.png'
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import db from "../../api/db/data";

const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Введіть ПІБ"),
    question: Yup.string().required("Оберіть тип питання"),
    phone: Yup.string()
        .matches(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/, "Невірний формат телефону")
        .required("Введіть номер телефону"),
});


const Contacts = () => {


    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            notes: "",
            question: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newTicket = {
                id: uuidv4(),
                ...values,
            };

            db.data.clientdata.push(newTicket)
            db.write()


            formik.resetForm();
        },
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = formik;

    const containerStyle = {
        width: '630px',
        height: '475px',
        borderRadius: '30px',
        overflow: 'hidden',
    };

    const center = {
        lat: 50.442437482784214,
        lng: 30.548129775657348,
    };

    return (
        <div>
            <Header/>
            <MainWrapper>
                <Title>Контакти</Title>
                <TopWrapper>
                    <FeedbackWrapper onSubmit={handleSubmit}>
                        <ContactFormTitle>Зворотнiй зв’язок</ContactFormTitle>
                        <Input
                            type="text"
                            placeholder="ПІБ"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        >
                        </Input>
                        {touched.name && errors.name ? <Error1>{errors.name}</Error1> : null}
                        <Row>
                            <Input
                                type="tel"
                                placeholder="+38(099)..."
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />

                            <Select
                                name="question"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.question}
                            >
                                <option value={''}>Тип питання</option>
                                <option>Перерахунок</option>
                                <option>Втрачений платiж</option>
                                <option>Змiна тарифу</option>
                                <option>Замовити видiлений IP</option>
                                <option>Вимкнути видiлений IP</option>
                                <option>Пропозиції</option>
                                <option>Скарги</option>
                            </Select>
                        </Row>
                        <ErrorsWrapper>
                            {touched.phone && errors.phone ? <Error2>{errors.phone}</Error2> : null}
                            {touched.question && errors.question ? <Error3>{errors.question}</Error3> : null}
                        </ErrorsWrapper>
                        <TextArea
                            rows="3"
                            cols="3"
                            type="text"
                            placeholder="Примiтки"
                            name="notes"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.notes}
                        />
                        <Button type="submit" text="Надiслати"/>
                    </FeedbackWrapper>

                    <ContactsWrapper>
                        <ContactFormTitle>Контактнi телефони</ContactFormTitle>
                        <PhoneLi><ContactsOperatorImg src={lifecell}/>+38(093)9999999</PhoneLi>
                        <PhoneLi><ContactsOperatorImg src={vodafone}/>+38(093)9999999</PhoneLi>
                        <PhoneLi><ContactsOperatorImg src={kyivstar}/>+38(093)9999999</PhoneLi>
                        <Email>E-mail:</Email>
                        <EmailText>office@thebest-on.com</EmailText>
                    </ContactsWrapper>
                </TopWrapper>
                <BottomWrapper>
                    <ScheduleMainWrapper>
                        <ContactFormTitle>Зворотнiй зв’язок</ContactFormTitle>
                        <ScheduleWrapper>
                            <ScheduleTitle>Кол центр: 8:00 - 20:00</ScheduleTitle>
                            <ScheduleText>щодня, <br/>без вихiдних</ScheduleText>
                            <ScheduleTitle>Сервiсний центр: 9:00 - 18:00</ScheduleTitle>
                            <ScheduleText>пн-сб, вихiдний нд</ScheduleText>
                            <ScheduleTitle>Монтажники: 8:00 - 20:00</ScheduleTitle>
                            <ScheduleText>пн-сб, вихiдний нд</ScheduleText>
                            <Address>Адреса:</Address>
                            <AddressText>Київ, вул. Городоцька</AddressText>
                        </ScheduleWrapper>
                    </ScheduleMainWrapper>

                    <LoadScript
                        googleMapsApiKey="AIzaSyAuMqkV_zvYjK7IiQMG4uRZwZOUqi-VMDY"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                        </GoogleMap>
                    </LoadScript>

                </BottomWrapper>
            </MainWrapper>
            <Footer/>
        </div>
    )
}

//Wrappers

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 240px;

`;

const FeedbackWrapper = styled.form`

  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  color: #0D316D;
  font-family: 'Inter', sans-serif;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 240px;
`;

const ScheduleMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #0D316D;
  justify-items: flex-start;
`;

const ScheduleWrapper = styled.div`
  width: 443px;
  height: 400px;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  justify-content: space-between;
`;


//Titles, text styles


const ScheduleTitle = styled.li`
  background: url(${li}) no-repeat left center;
  padding-left: 19px;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
`;
const ScheduleText = styled.div`
  width: 155px;
  height: 46px;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  flex-flow: column nowrap;
  padding-left: 19px;

`;


const Address = styled.div`
  font-size: 24px;
  line-height: 28px;
`
const AddressText = styled.div`
  font-size: 20px;
  line-height: 23px;
`

const ContactFormTitle = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  text-align: center;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 65px;
  line-height: 89px;
  color: #0D316D;
  text-align: center;
  padding-bottom: 70px;
`;


const PhoneLi = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

`

const Email = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #0D316D;
  margin-top: 25px;
`

const EmailText = styled.div`
  font-size: 20px;
  line-height: 23px;
  margin-top: 11px;
`

const ContactsOperatorImg = styled.img`
  height: 20px;
  margin-right: 15px;
`

//Forms

const Row = styled.div`
  max-width: 630px;
  display: flex;
  margin-top: 25px;
  flex-flow: row nowrap;
  gap: 25px;
`;

const Select = styled.select`
  min-width: 305px;
  flex: 1;
  height: 50px;
  border: 1px solid #0D316D;
  border-radius: 10px;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
  padding: 10px;

`


const Input = styled.input`
  height: 50px;
  padding: 10px;


`

const TextArea = styled.textarea`
  flex: 1;
  margin-top: 25px;
  padding: 15px;
  resize: none;
  min-width: 200px;
  margin-bottom: 30px;

`
//Errors

const ErrorsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

`

const Error1 = styled.div`       //TODO adaptive styles to Errors
  color: red;
`

const Error2 = styled(Error1)`
  display: flex;
  flex-direction: row;
  color: red;
  flex-wrap: wrap;
`

const Error3 = styled.div`
  margin-left: 15%;
  color: red;
`


export default React.memo(Contacts);