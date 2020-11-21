import {connect} from "react-redux";
import PrivateRoute from "./private-route";

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export default connect(mapStateToProps)(PrivateRoute);
