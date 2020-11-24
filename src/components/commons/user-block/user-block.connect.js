import {connect} from "react-redux";
import UserBlock from "./user-block";

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export default connect(mapStateToProps)(UserBlock);
