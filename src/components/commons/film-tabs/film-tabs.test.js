import TestRenderer from "react-test-renderer";
import FilmTabs from "./film-tabs";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Film Tabs`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <FilmTabs
              film={mock.FILM}
              activeTab={`Future`}
              tabClickHandler={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

