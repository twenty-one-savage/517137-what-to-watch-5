import TestRenderer from "react-test-renderer";
import withUserReview from "./with-user-review";
import * as mock from "../../mock-test";

const MockComponentWrapped = withUserReview(mock.MockComponent);

test(`render withUserReview`, () => {
  const tree = TestRenderer.create((
    <MockComponentWrapped
      rating={5}
      comment
      isValid={mock.noop}
      fieldChangeHandler={mock.noop}
    >
      <div/>
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
