import {AuthorizationStatus, AppRoute} from "../../../consts";
import {Link} from "react-router-dom";
import userBlockProp from "./user-block.prop";

const UserBlock = (props) => {
  const {authorizationStatus} = props;
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? (
          <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
        )
        : (<Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>)
      }
    </div>
  );
};

UserBlock.propTypes = userBlockProp;

export default UserBlock;
