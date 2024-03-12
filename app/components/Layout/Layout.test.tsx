import renderer from "react-test-renderer";

import Layout from "./Layout";

it("Layout component should render correctly", () => {
  const tree = renderer.create(<Layout>Click me</Layout>).toJSON();
  expect(tree).toMatchSnapshot();
});
