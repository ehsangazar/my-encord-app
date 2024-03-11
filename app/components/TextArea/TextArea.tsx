import { Field, FieldProps } from "formik";

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea = ({ name, placeholder }: TextAreaProps) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <textarea
          className="border border-gray-300 rounded p-2 w-full"
          {...field}
          placeholder={placeholder}
        />
      )}
    </Field>
  );
};

export default TextArea;
