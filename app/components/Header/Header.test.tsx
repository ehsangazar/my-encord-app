import renderer from "react-test-renderer";

import Header from "./Header";

it("Header component should render correctly", () => {
  const tree = renderer.create(<Header>Click me</Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
