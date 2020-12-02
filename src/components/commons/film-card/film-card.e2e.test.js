import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";
import * as mock from "../../../mock-test";
configure({adapter: new Adapter()});

it(`Should Film Card be Hovered and Unhovered`, () => {

  const handleFilmCardMouseOver = jest.fn();
  const handleFilmCardMouseOut = jest.fn();

  const wrapper = shallow(
      <FilmCard
        film={mock.FILM}
        onMouseOver={handleFilmCardMouseOver}
        onMouseOut={handleFilmCardMouseOut}
        isPlaying={true}
      />
  );

  const filmCard = wrapper.find(`article.small-movie-card`);
  filmCard.simulate(`mouseover`, {preventDefault() {}});
  filmCard.simulate(`mouseout`, {preventDefault() {}});
  expect(handleFilmCardMouseOver).toHaveBeenCalledTimes(1);
  expect(handleFilmCardMouseOut).toHaveBeenCalledTimes(1);
});


