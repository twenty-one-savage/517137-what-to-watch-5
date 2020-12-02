import TestRenderer from "react-test-renderer";
import FilmScreen from "./film-screen";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Film Screen`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <FilmScreen
              film={mock.FILM}
              authorizationStatus={`AUTH`}
              btnPlayHandler={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
