import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import styled from "styled-components";


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

const Modal = () => {
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
            alert(JSON.stringify(values, null, 2));
        },
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
    } = formik;

    return (
        <ModalWrapper>
            <HeaderText>Заявка на підключення</HeaderText>
            <Description>Залиши свої данні та ми зателефонуємо, щоб узгодити час та дату підключення.</Description>
            <ContactForm>
                <ContactFormTitle>Ваша адреса</ContactFormTitle>
                <InputSmallWrapper>
                    <SelectSmall
                        name="region"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.region}
                    >
                        <option value={null} selected>Область</option>
                        <option>Киевская</option>
                        <option>Львовская</option>
                        <option>Харьковская</option>
                    </SelectSmall>
                    {touched.region && errors.region ? (
                        <Error1>{errors.region}</Error1>
                    ) : null}
                    <SelectSmall
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                    >
                        <option value={null} selected>Мiсто</option>
                        <option>Киев</option>
                        <option>Львов</option>
                        <option>Харьков</option>
                    </SelectSmall>
                    {touched.city && errors.city ? <Error2>{errors.city}</Error2> : null}
                </InputSmallWrapper>
                <InputSmallWrapper>
                    <SelectSmall
                        type="text"
                        name="street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                    >
                        <option value={null} selected>Вулиця</option>
                        <option>Носа</option>
                        <option>Кита</option>
                        <option>Бандери</option>
                    </SelectSmall>
                    {touched.street && errors.street ? <Error1>{errors.street}</Error1> : null}
                    <InputSmall
                        type="text"
                        name="house"
                        placeholder="Будинок"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.house}
                    >
                    </InputSmall>
                    {touched.house && errors.house ? <Error1>{errors.house}</Error1> : null}
                </InputSmallWrapper>
                <ContactFormTitle>Вашi контакти</ContactFormTitle>
                <InputPIB
                    type="text"
                    placeholder="ПІБ"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                >

                </InputPIB>
                {touched.name && errors.name ? <Error1>{errors.name}</Error1> : null}
                <InputSmallWrapper>
                    <InputSmall
                        type="text"
                        placeholder="e-mail"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email ? <Error1>{errors.email}</Error1> : null}
                    <InputSmall
                        type="tel"
                        placeholder="+38(099)..."
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {touched.phone && errors.phone ? <Error2>{errors.phone}</Error2> : null}
                </InputSmallWrapper>
                <InputNote
                    type="text"
                    placeholder="Примiтки"
                    name="notes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notes}
                />
            </ContactForm>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 847px;
  position: relative

`

const HeaderText = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 50px;
  color: #0d316d;
`
const Description = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: #0D316D;
  text-align: center;
  margin-top: 30px;

`
const ContactFormTitle = styled.div`
  margin-bottom: 30px;
  margin-top: 70px;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: #0D316D;

`
const ContactForm = styled.div`
  height: 649px;
  width: 847px;

`

const InputPIB = styled.input`
  width: 845px;
  border-radius: 10px;

`

const InputSmallWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;

`

const SelectSmall = styled.select`
  width: 412px;
  height: 50px;
  border: 1px solid #0D316D;
  border-radius: 10px;
  font-size: 20px;
  line-height: 23px;
  color: #0D316D;
  padding: 10px;
`

const InputSmall = styled.input`
  width: 412px;
`


const InputNote = styled.input`
  width: 845px;
  height: 130px;
  margin-top: 25px;

  &::placeholder {
    position: absolute;
    top: 10%;
    left: 2%;
  }
`

const Error1 = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: 50px;
  color: red;
`

const Error2 = styled(Error1)`
  margin-left: 447px;
`


export default Modal;