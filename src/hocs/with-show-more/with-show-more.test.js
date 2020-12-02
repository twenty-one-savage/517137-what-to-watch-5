import TestRenderer from "react-test-renderer";
import withShowMore from "./with-show-more";
import {FILMS, MockComponent} from "../../mock-test";

const MockComponentWrapped = withShowMore(MockComponent);

test(`render withShowMore`, () => {
  const tree = TestRenderer.create((
    <MockComponentWrapped
      activeNumberOfFilms={4}
      films={FILMS}
    >
      <div/>
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
