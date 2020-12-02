import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmTabs from "./film-tabs";
import {FILM} from "../../../mock-test";

configure({adapter: new Adapter()});

it(`Should Film Tabs be pressed`, () => {
  const handleFilmTabsClick = jest.fn();

  const wrapper = shallow(
      <FilmTabs
        activeTab={`Hello`}
        tabClickHandler={handleFilmTabsClick}
        film={FILM}
      />
  );

  const filmTabs = wrapper.find(`.movie-nav__link`).at(0);
  filmTabs.simulate(`click`);
  expect(handleFilmTabsClick).toHaveBeenCalledTimes(1);
});
