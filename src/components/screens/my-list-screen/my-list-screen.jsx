import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import ListFilms from "../../commons/lists/list-films/list-films.connect";
import myListScreenProp from "./my-list-screen.prop";
import {HeaderClasses, HeaderTitles} from "../../../consts";

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

        <ListFilms films={favoriteFilms}/>
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = myListScreenProp;

export default MyListScreen;
