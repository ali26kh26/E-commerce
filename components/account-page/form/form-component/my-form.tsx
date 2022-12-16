import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import TextInput from "../../text-input/text-input";
import classes from "./my-form.module.scss";
import { input_props } from "../../../../types/input_props";

interface Props {
  initialValues: any;
  title: string;
  options: Array<input_props>;
  button_text: string;
  submitHandler: (values: any, actions: FormikHelpers<any>) => void;
}
export const MyForm = ({
  initialValues,
  title,
  options,
  button_text,
  submitHandler,
}: Props) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          submitHandler(values, actions);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("field required")
            .min(8, "password must contain 8 or more characters"),
        })}
      >
        <Form>
          {options.map((option, index) => (
            <div key={index} className={classes.form_items}>
              <TextInput {...option} />
            </div>
          ))}
          <button className={classes.submit} type="submit">
            {button_text}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
