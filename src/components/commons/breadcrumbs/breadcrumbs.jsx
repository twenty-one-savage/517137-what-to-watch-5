import {Link} from "react-router-dom";
import breadCrumbsProp from "./breadcrumbs.prop";

const BreadCrumbs = (props) => {
  const {id, name} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}/`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

BreadCrumbs.propTypes = breadCrumbsProp;

export default BreadCrumbs;
