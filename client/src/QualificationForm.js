import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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

export const QualificationForm = props => {
  console.log(props);
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          email: "",
          employmentStatus: "",
          annualIncome: "",
        }}
        validationSchema={Schema}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
          console.log(props.setUserQualificationDetails);
          props.setUserQualificationDetails(values);
          props.history.push("/select-card");
        }}
        render={({ errors, touched, isValid }) => (
          <Form>
            <label htmlFor="employmentStatus">Employment Status</label>
            <Field name="employmentStatus" placeholder="Jane" type="text" />

            <ErrorMessage
              name="employmentStatus"
              component="div"
              className="field-error"
            />

            <label htmlFor="annualIncome">Annual Income</label>
            <Field name="annualIncome" placeholder="Doe" type="text" />
            <ErrorMessage
              name="annualIncome"
              component="div"
              className="field-error"
            />

            <button
              type="submit"
              onSubmit={() => onSubmit(props.history)}
              disabled={!isValid}
            >
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};
