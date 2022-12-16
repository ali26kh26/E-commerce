import { input_props } from "../../../types/input_props";

export const register_options: Array<input_props> = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
  },
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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
