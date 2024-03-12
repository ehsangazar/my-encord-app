import renderer from "react-test-renderer";

import Input from "./Input";
import { Formik } from "formik";

it("Input component should render correctly", () => {
  const tree = renderer
    .create(
      <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
        <Input name="name" type="text" placeholder="Name" />
      </Formik>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
