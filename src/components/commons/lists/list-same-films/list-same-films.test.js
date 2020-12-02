import TestRenderer from "react-test-renderer";
import ListSameFilms from "./list-same-films";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../../mock-test";


test(`render List Same Films`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <ListSameFilms
              films={mock.FILMS}
              genre={`Comedy`}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

