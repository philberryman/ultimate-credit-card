import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledField,
  FormGrid,
  FormQuestions,
  FormError,
  Input,
  Label,
  Card,
  CardName,
  CardDetails,
  CardFact,
  CardData,
  CardLabel,
  MarketingHeader,
  Button,
} from "../styles/styles";

const postCodeRegEx = /^(([A-Z][A-Z]{0,1})([0-9][A-Z0-9]{0,1})) {0,}(([0-9])([A-Z]{2}))$/i;
const dateOfBirthRegEx = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Min of 2 characters")
    .max(40, "Must be no more than 40 charachters")
    .required("Name is required"),
  email: Yup.string()
    .email("Not a valid email address")
    .required("E-mail is required!"),
  postCode: Yup.string()
    .matches(postCodeRegEx, {
      message: "Not a valid UK post code",
      excludeEmptyString: true,
    })
    .required("Post code is required"),
  dateOfBirth: Yup.string()
    .matches(dateOfBirthRegEx, {
      message: "Must be dd/mm/yyyy",
      excludeEmptyString: true,
    })
    .required("Date of Birth is required"),
  houseNumber: Yup.string()
    .max(20, "Max 20 charachters")
    .required("House number is required"),
});

const onSubmit = history => history.push("/select-cards");

export const SelectedCard = ({
  selectedCard,
  history,
  card,
  checkIfAccepted,
}) => {
  return (
    <FormGrid>
      <Card key={card.name}>
        <CardName>{card.name}</CardName>
        <CardDetails>{card.details}</CardDetails>
        <CardFact>
          <CardLabel>APR : </CardLabel>
          <CardData>{card.apr}</CardData>
        </CardFact>
        <CardFact>
          <CardLabel>Credit Available :</CardLabel>{" "}
          <CardData>{card.creditAvailable}</CardData>
        </CardFact>
        <CardFact>
          <CardLabel>Balance Transfer Offer (months) :</CardLabel>{" "}
          <CardData>{card.balanceTransferOfferMonths}</CardData>
        </CardFact>
        <CardFact>
          <CardLabel>Purchase Offer Duration (months) : </CardLabel>
          <CardData>{card.purchaseOfferMonths}</CardData>
        </CardFact>
      </Card>
      <FormQuestions>
        <MarketingHeader>
          Just a few more details away from all that credit
        </MarketingHeader>
        <Formik
          validateOnBlur
          initialValues={{
            email: "",
            name: "",
            postCode: "",
            houseNumher: "",
            dateOfBirth: "",
          }}
          validationSchema={Schema}
          onSubmit={values => {
            checkIfAccepted(values);
            history.push("/decision");
          }}
          render={({ errors, touched, isValid, handleChange, handleBlur }) => (
            <Form>
              <StyledForm>
                <Label htmlFor="email">Email </Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    id="email"
                    placeholder="joe@gmail.com"
                    type="text"
                    component={StyledField}
                    error={errors.email && touched.email}
                  />
                  <FormError>
                    {errors.email && touched.email ? errors.email : null}
                  </FormError>{" "}
                </Input>

                <Label htmlFor="name">Full Name </Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    id="name"
                    placeholder="Joe Bloggs"
                    type="text"
                    component={StyledField}
                    error={errors.name && touched.name}
                  />
                  <FormError>
                    {errors.name && touched.name ? errors.name : null}
                  </FormError>
                </Input>

                <Label htmlFor="dateOfBirth">Date of Birth </Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder="24/12/1988"
                    type="text"
                    component={StyledField}
                    error={errors.dateOfBirth && touched.dateOfBirth}
                  />
                  <FormError>
                    {errors.dateOfBirth && touched.dateOfBirth
                      ? errors.dateOfBirth
                      : null}
                  </FormError>{" "}
                </Input>

                <Label htmlFor="postCode">Post Code </Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="postCode"
                    id="postCode"
                    placeholder="EC1 2AA"
                    type="text"
                    component={StyledField}
                    error={errors.postCode && touched.postCode}
                  />
                  <FormError>
                    {errors.postCode && touched.postCode
                      ? errors.postCode
                      : null}
                  </FormError>{" "}
                </Input>

                <Label htmlFor="houseNumber">House Number </Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="houseNumber"
                    id="houseNumber"
                    placeholder="42"
                    type="text"
                    component={StyledField}
                    error={errors.houseNumber && touched.houseNumber}
                  />
                  <FormError>
                    {errors.houseNumber && touched.houseNumber
                      ? errors.houseNumber
                      : null}
                  </FormError>{" "}
                </Input>

                <Button
                  type="submit"
                  onSubmit={() => onSubmit()}
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </StyledForm>
            </Form>
          )}
        />
      </FormQuestions>
    </FormGrid>
  );
};
