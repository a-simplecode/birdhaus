import cn from "classnames";
import { useState } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/GetInTouch.module.css";
import SVGPhone from "../components/icons/SVGPhone";
import SVGLocation from "../components/icons/SVGLocation";
import SVGEmail from "../components/icons/SVGEmail";
import SVGLinkedIn from "../components/icons/SVGLinkedIn";
import SVGInstagram from "../components/icons/SVGInstagram";
import SVGButton from "../components/icons/SVGButton";
import SVGFlagMGroup from "./icons/SVGFlagMGroup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ValidateEmail } from "../helpers/validations";

export default function GetInTouch() {
  const [thankYou, setThankYou] = useState(false);
  const options = [
    "Digital Strategy",
    "UI UX Design",
    "Growth Strategy",
    "Art Direction",
    "Design",
    "Logistics",
    "E-commerce",
    "Data Analysis",
    "Customer Support",
  ];
  const sendMessage = async (values, setSubmitting, resetForm) => {
    const result = await fetch("/api/email", {
      method: "post",
      body: JSON.stringify(values),
    });
    setThankYou(true);
    resetForm({});
    setSubmitting(false);
  };

  const sendFormHTML = () => {
    return (
      <div className="col-12 col-xl-6 pt-4">
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
            work: "Digital Strategy",
            message: "",
          }}
          validate={(values) => {
            if (thankYou) setThankYou(false);
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (!ValidateEmail(values.email)) {
              errors.email = "Please enter a valid email address";
            }

            if (!values.number) {
              errors.number = "Required";
            }

            if (!values.work) {
              errors.work = "Required";
            }

            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            sendMessage(values, setSubmitting, resetForm);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="formik_field"
                />
                <ErrorMessage
                  name="name"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div>
                <Field
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  className="formik_field"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div>
                <Field
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  className="formik_field"
                />
                <ErrorMessage
                  name="number"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div>
                <Field
                  as="select"
                  placeholder="I want to work with BirdHaus_"
                  name="work"
                  className="formik_field"
                >
                  {options.map((opt)=> <option key={opt} value={opt}>{opt}</option>)}
                </Field>
                <ErrorMessage
                  name="work"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  placeholder="Wirte your message here…"
                  name="message"
                  className="formik_field"
                  style={{ height: "100px" }}
                />
                <ErrorMessage
                  name="message"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div>
                {thankYou && (
                  <div className="text-success">Thank you for contacting us!</div>
                )}
                <button
                  type="submit"
                  className={styles.button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner-border" role="status"></div>
                  ) : (
                    <SVGButton />
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const contactInfoHTML = () => {
    return (
      <div className="col-12 offset-xl-1 col-xl-5 pt-4">
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <SVGPhone />
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <div className="font-MontserratBold">You can give us a call</div>
            <div className="font-MontserratRegular">+961 9 23 27 80</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <SVGLocation />
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <div className="font-MontserratBold">
              Come by, we’re always here
            </div>
            <div className="font-MontserratRegular">Find us on the map</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2 col-sm-1">
            <Link href="mailto:info@bird-haus.com">
              <a rel="noopener noreferrer">
                <SVGEmail />
              </a>
            </Link>
          </div>
          <div className="col-10 col-sm-11 fs-14">
            <Link href="mailto:info@bird-haus.com">
              <a rel="noopener noreferrer">
                <div className="font-MontserratBold">
                  And if you’re a introvert, email us
                </div>
                <div className="font-MontserratRegular">info@bird-haus.com</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span
              className="pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/company/birdhausdigital")
              }
            >
              <SVGLinkedIn />
            </span>{" "}
            <span
              className="pointer"
              onClick={() =>
                window.open("https://www.instagram.com/birdhausdigital")
              }
            >
              <SVGInstagram />
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={cn("col-12 zIndex", styles.container)}>
      <div className="row pl-4">
        <div className="col-12 offset-xl-1 col-xl-5 pt-4 zIndex">
          <Parallax className="custom-class" y={[-120, 50]} tagOuter="figure">
            <div className="font-MontserratBold fs-100">Let’s get</div>
          </Parallax>
          <Parallax className="custom-class" y={[-80, 35]} tagOuter="figure">
            <div className="font-MerriweatherLight fs-100 zIndex">in touch</div>
          </Parallax>
        </div>
      </div>
      <div className="row pl-4 hiddenMobile">
        {contactInfoHTML()}
        {sendFormHTML()}
      </div>

      <div className="row pl-4 hiddenDesktop">
        {sendFormHTML()}
        {contactInfoHTML()}
      </div>

      <div className="row mb-2">
        <div className="col-12 mt-4 mb-2 text-center">Part of</div>
        <div className="col-12 text-center">
          <SVGFlagMGroup />
        </div>
      </div>
    </div>
  );
}
