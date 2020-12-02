import TestRenderer from "react-test-renderer";
import BtnPlay from "./btn-play";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Button Play`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <BtnPlay
              id={mock.FILM.id}
              btnPlayHandler={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
