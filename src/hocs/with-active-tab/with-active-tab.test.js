import TestRenderer from "react-test-renderer";
import withActiveTab from "./with-active-tab";
import * as mock from "../../mock-test";

const MockComponentWrapped = withActiveTab(mock.MockComponent);

test(`render withActiveTab`, () => {
  const tree = TestRenderer.create((
    <MockComponentWrapped
      activeTab={`Comedy`}
      tabClickHandler={mock.noop}
    >
      <div/>
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
