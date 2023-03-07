import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import {Button} from "../../components/buttons/button";
import * as Yup from "yup";
import {useHttp} from "../../hooks/http.hook";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import lifecell from "../../assets/images/lifecell.png";
import vodafone from "../../assets/images/vodafone.png";
import kyivstar from "../../assets/images/kyivstar.png";


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введіть ПІБ"),
    phone: Yup.string()
        .matches(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/, "Невірний формат телефону")
        .required("Введіть номер телефону"),
});


const Contacts = () => {

    const {request} = useHttp();

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            notes: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newTicket = {
                id: uuidv4(),
                ...values,
            };
            console.log("newClient", newTicket);


            request("http://localhost:3001/clientticket", "POST", JSON.stringify(newTicket))
                .then(res => console.log(res, 'Отправка успешна'))
                .catch(err => console.log(err));

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
                        {touched.name && errors.name ? <Error3>{errors.name}</Error3> : null}
                        <Row>
                            <Input
                                type="tel"
                                placeholder="+38(099)..."
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {touched.phone && errors.phone ? <Error2>{errors.phone}</Error2> : null}
                            <Select
                                placeholder="question"
                                name="question"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.question}
                            />
                            {touched.question && errors.question ? <Error1>{errors.email}</Error1> : null}
                        </Row>
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
                {/*<BottomWrapper>*/}
                {/*    <Chart>*/}

                {/*    </Chart>*/}
                {/*    <GoogleMap>*/}

                {/*    </GoogleMap>*/}
                {/*</BottomWrapper>*/}
            </MainWrapper>

            <Footer/>
        </div>
    )
}

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
  width: 623px;
  width: 623px;
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


// const GoogleMap = styled.div`
//
// `;
//
// const BottomWrapper = styled.div`
//
// `;
// const Chart = styled.div`
//
// `;


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
  flex: 1;
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

const Error1 = styled.div`       //TODO adaptive styles to Errors
  position: absolute;
  margin-left: 1%;
  margin-top: 50px;
  color: red;
`

const Error2 = styled(Error1)`
  margin-left: 50%;
`

const Error3 = styled.div`
  margin-left: 1%;
  color: red;
`


const MenuTitle = styled.div`
  margin-bottom: 20px;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;

`;


const PhoneLi = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

`

const ContactsOperatorImg = styled.img`
  height: 20px;
  margin-right: 15px;
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

export default Contacts;