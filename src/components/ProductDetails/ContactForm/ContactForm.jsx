import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./ContactForm.css";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: #2b6cb0;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: #e53e3e;
  width: 300px;
  margin-top: 0rem;
  &:before {
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: #feb2b2;
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(35, "Must be 20 characters or less")
            .required("Name is required"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Phone is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            // specify the set of valid values for job type
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="contactForm">
            <div className="contact_profile">
              <div className="contact_profile_pic">
                <img
                  src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-3-150x150.jpg"
                  width={50}
                  alt="profile"
                />
              </div>
              <span className="agent-name">Samuel Palmer </span>
            </div>

            <MyTextInput name="name" type="text" placeholder="Name" />
            <MyTextInput name="phone" type="phone" placeholder="Phone" />
            <MyTextInput name="email" type="email" placeholder="Email" />
            <MyTextArea
              className="textarea"
              name="massage"
              rows="6"
              placeholder="Hello, I am interested in [Light and modern apartment]"
            />
            <div className="select_opt">
              <MySelect name="jobType">
                <option value="">Select</option>
                <option value="designer">I'm a tenant</option>
                <option value="development">I'm a tenant</option>
                <option value="product">I'm an agent</option>
                <option value="other">Other</option>
              </MySelect>
            </div>
            <div className="terms terms_policy">
              <MyCheckbox name="acceptedTerms">
                By submitting this form I agree
                {/* <a
                  className="terms_policy"
                  target="_blank"
                  href="https://demo02.houzez.co/terms-and-conditions/"
                > */}
                terms
                {/* </a> */}
              </MyCheckbox>
            </div>

            <button className="query_btn upper_query_btn" type="submit">
              Submit
            </button>
            <button className="query_btn mid_query_btn" type="submit">
              Call
            </button>

            <button className="query_btn lower_query_btn" type="submit">
              WhatsApp
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

