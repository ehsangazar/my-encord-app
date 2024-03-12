import renderer from "react-test-renderer";

import FormGroup from "./FormGroup";

it("FormGroup component should render correctly", () => {
  const tree = renderer.create(<FormGroup>Click me</FormGroup>).toJSON();
  expect(tree).toMatchSnapshot();
});
