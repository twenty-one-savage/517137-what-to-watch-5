import TestRenderer from "react-test-renderer";
import BreadCrumbs from "./breadcrumbs";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render Breadcrumbs`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <BreadCrumbs
              id={mock.FILM.id}
              name={mock.FILM.name}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
