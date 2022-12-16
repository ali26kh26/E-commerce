import { useField } from "formik";
import classes from "./text-input.module.scss";
interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

const TextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.container}>
      <label htmlFor={props.name}>{label}</label>
      <input
        className={meta.error && meta.touched ? classes.error : ""}
        id={props.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
