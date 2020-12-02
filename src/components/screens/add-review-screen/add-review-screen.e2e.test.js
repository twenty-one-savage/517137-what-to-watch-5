import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReviewScreen from "./add-review-screen";
import {FILM} from "../../../mock-test";

configure({adapter: new Adapter()});

it(`Should button add review button be pressed`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = shallow(
      <AddReviewScreen
        film={FILM}
        onSubmit={handleFormSubmit}
      />
  );

  const reviewBtn = wrapper.find(`.add-review__btn`);
  reviewBtn.simulate(`click`, {preventDefault() {}});
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
