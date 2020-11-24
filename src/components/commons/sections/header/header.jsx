import {Link} from "react-router-dom";
import UserBlock from "../../user-block/user-block.connect";
import headerProps from "./header.prop";
import {AppRoute} from "../../../../consts";

const Header = (props) => {
  const {title, className, children} = props;
  return (
    <header className={`page-header ${className ? className : ``}`}>
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      <UserBlock />
      {title && (<h1 className="page-title user-page__title">{title}</h1>)}
    </header>
  );
};

Header.propTypes = headerProps;

export default Header;
