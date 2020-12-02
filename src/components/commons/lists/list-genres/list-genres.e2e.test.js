import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListGenres from "./list-genres";

configure({adapter: new Adapter()});

it(`Should genre be pressed`, () => {
  const handleGenreClick = jest.fn();

  const wrapper = shallow(
      <ListGenres
        genres={[`Comedy`, `Cartoon`, `History`]}
        activeGenre={`Crime`}
        changeActiveFilter={handleGenreClick}
      />
  );

  const listGenres = wrapper.find(`.catalog__genres-item`).at(0);
  listGenres.simulate(`click`, {preventDefault() {}});
  expect(handleGenreClick).toHaveBeenCalledTimes(1);
});
