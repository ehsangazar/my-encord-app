import { Field, FieldProps } from "formik";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <input
          className="border border-gray-300 rounded p-2 w-full"
          {...field}
          type={type}
          placeholder={placeholder}
        />
      )}
    </Field>
  );
};

export default Input;
