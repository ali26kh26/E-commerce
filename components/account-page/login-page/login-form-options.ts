import { input_props } from "../../../types/input_props";

export const login_options: Array<input_props> = [
  {
    label: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const initialValues: MyFormValues = {
  email: "",
  password: "",
};
interface MyFormValues {
  email: string;
  password: string;
}
