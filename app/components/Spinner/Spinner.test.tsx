import renderer from "react-test-renderer";

import Spinner from "./Spinner";

it("Spinner component should render correctly", () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
