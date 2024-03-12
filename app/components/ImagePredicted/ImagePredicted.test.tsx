import renderer from "react-test-renderer";

import ImagePredicted from "./ImagePredicted";

it("ImagePredicted component should render correctly", () => {
  const tree = renderer
    .create(
      <ImagePredicted
        image={{ url: "https://example.com/image.jpg", filename: "image.jpg" }}
        predictions={[
          {
            bbox: { x1: 0, y1: 0, x2: 100, y2: 100 },
            label: "label",
            score: 0.9,
          },
        ]}
      >
        Click me
      </ImagePredicted>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
