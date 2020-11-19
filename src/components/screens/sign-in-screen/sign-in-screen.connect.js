import {connect} from "react-redux";
import SignInScreen from "./sign-in-screen";
import {login} from "../../../store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignInScreen);
