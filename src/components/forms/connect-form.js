import React, {useEffect} from "react";
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import * as Yup from "yup";
import styled from "styled-components";
import {Button} from "../buttons/button";
import db from "../../api/db/data";

const validationSchema = Yup.object().shape({
    region: Yup.string().required("Оберіть область"),
    city: Yup.string().required("Оберіть місто"),
    street: Yup.string().required("Введіть вулицю"),
    house: Yup.string().required("Введіть номер будинку"),
    name: Yup.string().required("Введіть ПІБ"),
    email: Yup.string().email("Невірний формат електронної пошти"),
    phone: Yup.string()
        .matches(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/, "Невірний формат телефону")
        .required("Введіть номер телефону"),
});

const ConnectForm = (props) => {


    const formik = useFormik({
        initialValues: {
            region: "",
            city: "",
            street: "",
            house: "",
            name: "",
            email: "",
            phone: "",
            notes: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newClient = {
                id: uuidv4(),
                ...values,
            };
            console.log("newClient", newClient);


            db.data.clientticket.push(newClient)
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


    return (
        <ModalWrapper>
            <HeaderText>Заявка на підключення</HeaderText>
            <Description>Залиши свої данні та ми зателефонуємо, щоб узгодити час та дату підключення.</Description>
            <ContactForm onSubmit={handleSubmit}>
                <ContactFormTitle>Ваша адреса</ContactFormTitle>
                <Row>
                    <Select
                        name="region"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.region}

                    >
                        <option value={''}>Область</option>
                        <option>Киевская</option>
                        <option>Львовская</option>
                        <option>Харьковская</option>
                    </Select>
                    {touched.region && errors.region ? (
                        <Error1>{errors.region}</Error1>
                    ) : null}
                    <Select
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}

                    >
                        <option value={''}>Мiсто</option>
                        <option>Киев</option>
                        <option>Львов</option>
                        <option>Харьков</option>
                    </Select>
                    {touched.city && errors.city ? <Error2>{errors.city}</Error2> : null}
                </Row>
                <Row>
                    <Select
                        type="text"
                        name="street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}

                    >
                        <option value={''}>Вулиця</option>
                        <option>Носа</option>
                        <option>Кита</option>
                        <option>Бандери</option>
                    </Select>
                    {touched.street && errors.street ? <Error1>{errors.street}</Error1> : null}
                    <Input
                        type="text"
                        name="house"
                        placeholder="Будинок"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.house}
                    >
                    </Input>
                    {touched.house && errors.house ? <Error2>{errors.house}</Error2> : null}
                </Row>
                <ContactFormTitle>Вашi контакти</ContactFormTitle>
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
                        type="text"
                        placeholder="e-mail"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email ? <Error1>{errors.email}</Error1> : null}
                    <Input
                        type="tel"
                        placeholder="+38(099)..."
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {touched.phone && errors.phone ? <Error2>{errors.phone}</Error2> : null}
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
                <ButtonContainer centered={props.buttonCentered}>
                    <Button type="submit" text="Підключитися"/>
                </ButtonContainer>
            </ContactForm>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 847px;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const HeaderText = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 50px;
  color: #0d316d;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 20px;
  }
`;

const ContactFormTitle = styled.div`
  margin-bottom: 30px;
  margin-top: 70px;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: #0D316D;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 25px;
  flex-flow: row wrap;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Select = styled.select`
  flex: 1;
  height: 50px;
  border: 1px solid #0D316D;
  border-radius: 10px;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
  padding: 10px;
  min-width: 200px;
  @media only screen and (min-width: 768px) {
    min-width: 390px;
  }
`

const Input = styled.input`
  flex: 1;
  padding: 10px;
  min-width: 200px;
  @media only screen and (min-width: 768px) {
    min-width: 390px;
  }
`

const TextArea = styled.textarea`
  flex: 1;
  margin-top: 25px;
  padding: 15px;
  resize: none;
  min-width: 200px;
  @media only screen and (min-width: 768px) {
    min-width: 390px;
  }
`

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: ${props => props.centered ? "center" : "flex-start"};
`;


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


export default ConnectForm;