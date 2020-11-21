import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../../consts";
import privateRouteProp from "./private-route.prop";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = privateRouteProp;

export default PrivateRoute;
