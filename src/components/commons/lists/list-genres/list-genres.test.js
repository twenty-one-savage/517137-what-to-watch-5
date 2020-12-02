import TestRenderer from "react-test-renderer";
import ListGenres from "./list-genres";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../../mock-test";


test(`render List Genres`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <ListGenres
              genres={[`Comedy`, `Crime`, `Drama`, `Anime`]}
              activeGenre={`Future`}
              changeActiveFilter={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

