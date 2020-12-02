import TestRenderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Video Player`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <VideoPlayer
              video_link={mock.FILM.video_link}
              poster_image={mock.FILM.poster_image}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

