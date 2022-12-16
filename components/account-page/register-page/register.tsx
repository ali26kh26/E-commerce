import * as React from "react";
import { initialValues, register_options } from "./register-form-options";
import { FormikHelpers } from "formik";
import { FullPage } from "../full-page/full-page";

export const Register: React.FC<{}> = () => {
  const registerSubmitHandler = (values: any, actions: FormikHelpers<any>) => {
    console.log(values);
  };
  return (
    <FullPage
      href="login"
      title="Create Account"
      side_button_text="Log in"
      submitHandler={registerSubmitHandler}
      side_title="Already an account holder?"
      button_text="Submit"
      initialValues={initialValues}
      options={register_options}
    />
  );
};
