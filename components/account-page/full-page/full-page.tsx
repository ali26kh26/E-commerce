import * as React from "react";
import classes from "./full-page.module.scss";
import { MyForm } from "../form/form-component/my-form";
import { FormikHelpers } from "formik";
import SlideButton from "../../../UI/slide-button/slide-button";
import { input_props } from "../../../types/input_props";

interface Props {
  initialValues: any;
  title: string;
  options: Array<input_props>;
  button_text: string;
  submitHandler: (values: any, actions: FormikHelpers<any>) => void;
  side_button_text: string;
  side_title: string;
  href: string;
}

export const FullPage = ({
  initialValues,
  title,
  options,
  button_text,
  submitHandler,
  side_button_text,
  side_title,
  href,
}: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <MyForm
          submitHandler={submitHandler}
          button_text={button_text}
          options={options}
          initialValues={initialValues}
          title={title}
        />
      </div>

      <div className={classes.more}>
        <h2>{side_title}</h2>
        <SlideButton text={side_button_text} href={`/account/${href}`} />
        <div className={classes.policy}>
          <p>* Terms & Conditions.</p>
          <p>
            Your privacy and security are important to us. For more information
            on how we use your data read our <span>privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
