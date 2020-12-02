import TestRenderer from "react-test-renderer";
import FilmCard from "./film-card";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Film Card`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <FilmCard
              film={mock.FILM}
              onClick={mock.noop}
              onMouseOver={mock.noop}
              onMouseOut={mock.noop}
              isPlaying={false}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

