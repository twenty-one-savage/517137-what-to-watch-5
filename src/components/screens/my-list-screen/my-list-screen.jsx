import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import ListFilms from "../../commons/lists/list-films/list-films.connect";
import {filmsType} from "../../../commonPropTypes";
import {HeaderClasses, HeaderTitles} from "../../../consts";

const MyListScreen = (props) => {
  const {films} = props;
  return (
    <div className="user-page">
      <Header
        title={HeaderTitles.MY_LIST}
        className={HeaderClasses.USER_PAGE_HEAD}
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms films={films}/>
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = filmsType;

export default MyListScreen;
