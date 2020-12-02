import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BtnPlay from "./btn-play";

configure({adapter: new Adapter()});

it(`Should play button be pressed`, () => {
  const handleBtnPlayClick = jest.fn();

  const wrapper = shallow(
      <BtnPlay
        id={22}
        btnPlayHandler={handleBtnPlayClick}
      />
  );

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);
  expect(handleBtnPlayClick).toHaveBeenCalledTimes(1);
});
