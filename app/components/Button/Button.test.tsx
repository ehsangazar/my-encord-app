import renderer from "react-test-renderer";

import Button from "./Button";

it("Button component should render correctly", () => {
  const tree = renderer.create(<Button>Click me</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
