import TestRenderer from "react-test-renderer";
import PlayerScreen from "./player-screen";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Player Screen`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <PlayerScreen
              name={mock.FILM.name}
              isPlaying={true}
              videoCurrentTime={102}
              progressBarPosition={23}
              handlePlayerExitClick={mock.noop}
              handlePlayerFullScreenClick={mock.noop}
              handlePlayerPlayClick={mock.noop}
              handlePlayerPauseClick={mock.noop}
            >
              <div>ddd</div>
            </PlayerScreen>
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
