interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="flex my-2">{children}</div>;
};

export default FormGroup;
