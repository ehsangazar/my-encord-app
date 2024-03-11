import { Form, Formik } from "formik";
import Button from "~/components/Button/Button";
import FormGroup from "~/components/FormGroup/FormGroup";
import Input from "~/components/Input/Input";
import TextArea from "~/components/TextArea/TextArea";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

interface PredictFormProps {
  handlePredict: (values: { title: string; description: string }) => void;
}

const PredictForm: React.FC<PredictFormProps> = ({
  handlePredict,
}: PredictFormProps) => {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handlePredict && handlePredict(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <FormGroup>
            <Input name="title" type="text" placeholder="Title" />
          </FormGroup>
          <FormGroup>
            <TextArea name="description" placeholder="Description" />
          </FormGroup>
          <FormGroup>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default PredictForm;
