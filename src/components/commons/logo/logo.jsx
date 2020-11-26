import {Link} from "react-router-dom";
import {AppRoute} from "../../../consts";
import logoProp from "./logo.prop";

const Logo = (props) => {
  const {isLink, additionalClassNames} = props;
  return (
    <div className="logo">
      {
        isLink
          ? (
            <Link to={AppRoute.ROOT} className={`logo__link ${additionalClassNames ? additionalClassNames.join(` `) : ``}`}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          )
          : (
            <div className={`logo__link ${additionalClassNames ? additionalClassNames.join(` `) : ``}`}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </div>
          )
      }
    </div>
  );
};

Logo.defaultProps = {
  isLink: true
};

Logo.propTypes = logoProp;

export default Logo;
