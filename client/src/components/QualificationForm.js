import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledField,
  FormGrid,
  FormQuestions,
  FormContent,
  BenefitsList,
  Input,
  Label,
  Select,
  Button,
  FormError,
} from "../styles/styles";

const Schema = Yup.object().shape({
  employmentStatus: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  annualIncome: Yup.string().required("Required"),
});

const onSubmit = history => history.push("/select-cards");

export const QualificationForm = ({ setUserQualificationDetails, history }) => {
  return (
    <FormGrid>
      <FormContent>
        Your next credit card!!
        <BenefitsList>
          <li>Instant decision</li>
          <li>Biggest cards</li>
          <li>Best rates</li>
          <li>World peace</li>
          <li>Find a better card today</li>
        </BenefitsList>
      </FormContent>
      <FormQuestions>
        <Formik
          initialValues={{
            employmentStatus: "",
            annualIncome: "",
          }}
          validationSchema={Schema}
          onSubmit={values => {
            setUserQualificationDetails(values);
            history.push("/select-card");
          }}
          render={({ errors, touched, isValid, handleChange, handleBlur }) => (
            <Form>
              <StyledForm>
                <Label htmlFor="employmentStatus">Employment</Label>
                <Input>
                  <Select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="employmentStatus"
                    id="employmentStatus"
                    placeholder="Employed"
                    type="text"
                    error={errors.employmentStatus}
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
                  <FormError>{errors.employmentStatus}</FormError>
                </Input>

                <Label htmlFor="annualIncome">Annual Income</Label>
                <Input>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="annualIncome"
                    id="annualIncome"
                    placeholder="10,000"
                    type="number"
                    autocomplete="off"
                    component={StyledField}
                    error={errors.annualIncome && touched.annualIncome}
                  />
                  <FormError>
                    {errors.annualIncome && touched.annualIncome
                      ? errors.annualIncome
                      : null}
                  </FormError>
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
