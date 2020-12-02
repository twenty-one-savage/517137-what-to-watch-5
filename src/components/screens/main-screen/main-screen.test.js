import TestRenderer from "react-test-renderer";
import MainScreen from "./main-screen";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Main Screen`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <MainScreen
              promoFilm={mock.FILM}
              btnPlayHandler={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
