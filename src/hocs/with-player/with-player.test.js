import TestRenderer from "react-test-renderer";
import withPlayer from "./with-player";
import * as mock from "../../mock-test";

const MockComponentWrapped = withPlayer(mock.MockComponent);

test(`render withPlayer`, () => {
  const tree = TestRenderer.create(
      <MockComponentWrapped
        isPlaying={false}
        film={mock.FILM}
        videoCurrentTime={25}
        progressBarPosition={2}
        handlePlayerExitClick={mock.noop}
        handlePlayerFullscreenClick={mock.noop}
        handlePlayerPlayClick={mock.noop}
        handlePlayerPauseClick={mock.noop}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
