import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BtnFavorite from "./btn-favorite";
import * as mock from "../../../mock-test";

configure({adapter: new Adapter()});

it(`Should favorite button be pressed`, () => {
  const handleBtnFavoriteClick = jest.fn();

  const wrapper = shallow(
      <BtnFavorite
        film={mock.FILM}
        btnFavoriteClickHandler={handleBtnFavoriteClick}
      />
  );

  const favoriteButton = wrapper.find(`button.btn--list`);
  favoriteButton.simulate(`click`);
  expect(handleBtnFavoriteClick).toHaveBeenCalledTimes(1);
});
