import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import FilmCard from "../../commons/film-card/film-card";
import withHover from "../../../hocs/with-hover/with-hover";
import myListScreenProp from "./my-list-screen.prop";
import {HeaderClasses, HeaderTitles} from "../../../consts";

const FilmCardWithHover = withHover(FilmCard);

const MyListScreen = (props) => {
  const {favoriteFilms} = props;
  return (
    <div className="user-page">
      <Header
        title={HeaderTitles.MY_LIST}
        additionalClassNames={[HeaderClasses.USER_PAGE_HEAD]}
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {
            favoriteFilms.map((film, i) => (
              <FilmCardWithHover
                key={`${i}-${film.title}`}
                film={film}
              />
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = myListScreenProp;

export default MyListScreen;
