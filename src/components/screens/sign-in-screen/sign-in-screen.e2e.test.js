import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignInScreen from "./sign-in-screen";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducer from '../../../store/reducers/root-reducer';
import {Router} from 'react-router-dom';
import browserHistory from '../../../browser-history';

configure({adapter: new Adapter()});
const store = createStore(reducer);

it(`Should sign-in-form be submitted`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <SignInScreen onSubmit={handleFormSubmit}/>
        </Router>
      </Provider>
  );

  wrapper.find(`input[type="email"]`).instance().value = `me@you.he`;
  wrapper.find(`input[type="password"]`).instance().value = `123`;
  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(handleFormSubmit).toHaveBeenCalledWith({
    login: `me@you.he`,
    password: `123`,
  });
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
