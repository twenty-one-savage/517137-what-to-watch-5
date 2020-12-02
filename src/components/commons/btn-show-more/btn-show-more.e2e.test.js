import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BtnShowMore from "./btn-show-more";

configure({adapter: new Adapter()});

it(`Should show more button be pressed`, () => {
  const handleBtnShowMoreClick = jest.fn();

  const wrapper = shallow(
      <BtnShowMore onClick={handleBtnShowMoreClick}/>
  );

  const showMoreButton = wrapper.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(handleBtnShowMoreClick).toHaveBeenCalledTimes(1);
});

