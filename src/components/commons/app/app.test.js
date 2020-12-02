import TestRenderer from "react-test-renderer";
import App from "./app";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";


test(`render App`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <App
              films={mock.FILMS}
              isApplicationReady={true}
              initApplication={mock.noop}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
