import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  FormGrid,
  FormQuestions,
  FormContent,
  BenefitsList,
  Input,
  Label,
  Select,
} from "./styles/styles";

const Schema = Yup.object().shape({
  employmentStatus: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  annualIncome: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required("Required"),
});

const onSubmit = history => history.push("/select-cards");

export const QualificationForm = ({ setUserQualificationDetails, history }) => {
  return (
    <FormGrid>
      <FormContent>
        Just 2 simple questons <br /> = <br />
        CREDIT CARD BLISS
        <BenefitsList>
          <li>2 questions</li>
          <li>Instant decision</li>
          <li>Biggest cards</li>
          <li>Best rates</li>
          <li>Find a better card today</li>
        </BenefitsList>
      </FormContent>
      <FormQuestions>
        <h1>Sign up</h1>
        <Formik
          initialValues={{
            email: "",
            employmentStatus: "",
            annualIncome: "",
          }}
          validationSchema={Schema}
          onSubmit={values => {
            setUserQualificationDetails(values);
            history.push("/select-card");
          }}
          render={({ errors, touched, isValid, handleChange }) => (
            <Form>
              <Label htmlFor="employmentStatus">Employment Status</Label>

              <Select
                onChange={handleChange}
                name="employmentStatus"
                placeholder="Employed"
                type="text"
              >
                <option value="">--Please choose an option--</option>
                <option value="full time employment">
                  Full Time Employment
                </option>
                <option value="Part Time Employment">
                  Part Time Employment
                </option>
                <option value="student">Student</option>
                <option value="self employed">Self Employed</option>
                <option value="pensioner">Pensioner</option>
                <option value="unemployed">Unemployed</option>
                <option value="other">Other</option>
              </Select>
              <br />
              <br />
              <Label htmlFor="annualIncome">Annual Income</Label>
              <br />
              <Input
                onChange={handleChange}
                name="annualIncome"
                placeholder="10,000"
                type="text"
                autocomplete="off"
              />
              <br />
              <br />

              <button
                type="submit"
                onSubmit={() => onSubmit()}
                disabled={!isValid}
              >
                Submit
              </button>
            </Form>
          )}
        />
      </FormQuestions>
    </FormGrid>
  );
};
