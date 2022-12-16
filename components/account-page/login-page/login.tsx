import * as React from "react";
import { initialValues, login_options } from "./login-form-options";
import { FormikHelpers } from "formik";
import { FullPage } from "../full-page/full-page";

export const Login: React.FC<{}> = () => {
  const loginsubmitHandler = (values: any, actions: FormikHelpers<any>) => {
    console.log(values);
  };
  return (
    <FullPage
      href="register"
      title="Login"
      side_button_text="create account"
      submitHandler={loginsubmitHandler}
      side_title="Dont have an account?"
      button_text="Sign In"
      initialValues={initialValues}
      options={login_options}
    />
  );
};
