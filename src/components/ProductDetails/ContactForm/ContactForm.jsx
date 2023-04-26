import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./ContactForm.css";

const nameRegExp = /^[A-Z a-z]{2,}$/;
const phoneRegExp = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
const emailRegExp = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/;

const MyTextInput = ({ label, ...props }) => {
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

const StyledSelect = styled.select`
  color: #2b6cb0;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: #e53e3e;
  width: 87%;
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
  const [field, meta] = useField(props);
  return (
    <>
      <div htmlFor={props.id || props.name}>{label}</div>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
          acceptedTerms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(36, "Must be 36 characters or less.")
            .matches(nameRegExp, "Name is not valid.")
            .required("Name is required."),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid.")
            .required("Phone is required."),
          email: Yup.string()
            .email("Use '@'")
            .matches(emailRegExp, "Email is not valid.")
            .required("Email is required."),
          // message: Yup.string()
          //   .max(300, "Must be 300 characters or less.")
          //   .required("Massage is required."),
          acceptedTerms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms & conditions."
          ),
          jobType: Yup.string()
            .oneOf(["buyer", "tenant", "agent", "other"], "Invalid Job Type.")
            .required("Profession is required."),
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
              placeholder="Type a massage..."
            />
            <div className="select_opt">
              <MySelect name="jobType" className="select_opt_child">
                <option value="">Select</option>
                <option value="buyer">I'm a buyer</option>
                <option value="tenant">I'm a tenant</option>
                <option value="agent">I'm an agent</option>
                <option value="other">Other</option>
              </MySelect>
            </div>
            <div className="terms terms_policy">
              <MyCheckbox name="acceptedTerms">
                By submitting this form I agree terms
              </MyCheckbox>
            </div>
            <button className="query_btn upper_query_btn" type="submit">
              SEND
            </button>
            <button className="query_btn mid_query_btn" type="">
              Call
            </button>
            <button className="query_btn lower_query_btn" type="">
              WhatsApp
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
