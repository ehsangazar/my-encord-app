import { ErrorMessage, Field, FieldProps } from "formik";

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea = ({ name, placeholder }: TextAreaProps) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <div className="flex flex-col w-full mb-4">
          <textarea
            className="border border-gray-300 rounded p-2 w-full"
            {...field}
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

export default TextArea;
