import { ErrorMessage, Field, FieldProps } from "formik";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-gray-300 rounded p-2 w-full"
            {...field}
            type={type}
            placeholder={placeholder}
          />
          <ErrorMessage name={name}>
            {(msg) => <div className="text-xs text-red-500">{msg}</div>}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default Input;
