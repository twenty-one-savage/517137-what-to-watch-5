import TestRenderer from "react-test-renderer";
import TabOverview from "./tab-overview";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../../mock-test";


test(`render Tab Overview`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <TabOverview
              film={mock.FILM}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

