import TestRenderer from "react-test-renderer";
import UserBlock from "./user-block";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../mock-test";
import {AuthorizationStatus} from "../../../consts";


test(`render User Block`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

