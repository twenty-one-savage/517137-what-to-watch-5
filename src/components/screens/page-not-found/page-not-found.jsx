import {Link} from "react-router-dom";
import {AppRoute, HeaderClasses} from "../../../consts";
import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";

const PageNotFound = () => {
  return (
    <div className="user-page">
      <Header additionalClassNames={[HeaderClasses.USER_PAGE_HEAD]}/>
      <div style={{
        maxWidth: `50%`,
        paddingBottom: `30px`,
        margin: `0 auto`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}>
        <h1>Not Found (#404)</h1>
        <img src="img/yH.gif" alt="John"/>
        <p>Страница не найдена.</p>
        <Link className="catalog__genres-link" to={AppRoute.ROOT}>Я, кажется, заблудился, верните меня домой!</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default PageNotFound;
