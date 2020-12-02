import TestRenderer from "react-test-renderer";
import withHover from "./with-hover";
import * as mock from "../../mock-test";

const MockComponentWrapped = withHover(mock.MockComponent);

test(`render withHover`, () => {
  const tree = TestRenderer.create((
    <MockComponentWrapped
      isPlaying={false}
      onMouseOver={mock.noop}
      onMouseOut={mock.noop}
    >
      <div/>
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
