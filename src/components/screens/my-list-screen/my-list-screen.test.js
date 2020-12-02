import TestRenderer from "react-test-renderer";
import MyListScreen from "./my-list-screen";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render My List Screen`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <MyListScreen
              favoriteFilms={mock.FILMS}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
