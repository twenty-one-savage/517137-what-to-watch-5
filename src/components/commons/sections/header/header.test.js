import TestRenderer from "react-test-renderer";
import Header from "./header";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as mock from "../../../../mock-test";


test(`render Header`, () => {
  const tree = TestRenderer
    .create(
        <Provider store={mock.store}>
          <BrowserRouter>
            <Header
              title={`Hello`}
              additionalClassNames={[`additional-class`, `additional-class_active`]}
              logoIsLink={true}
            >
              <div>Hello</div>
            </Header>
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

