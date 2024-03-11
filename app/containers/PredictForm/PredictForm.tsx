import { Form, Formik } from "formik";
import Button from "~/components/Button/Button";
import FormGroup from "~/components/FormGroup/FormGroup";
import Input from "~/components/Input/Input";
import TextArea from "~/components/TextArea/TextArea";
import * as yup from "yup";
import Spinner from "~/components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "~/reducers/store";

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
  const [loading, error] = useSelector((state: RootState) => [
    state.prediction.loading,
    state.prediction.error,
  ]);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        handlePredict(values);
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
          {error && <div className="text-red-500">{error}</div>}
          <FormGroup>
            {!loading && (
              <Button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </Button>
            )}
            {loading && <Spinner />}
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default PredictForm;
