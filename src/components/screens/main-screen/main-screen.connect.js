import {connect} from "react-redux";
import MainScreen from "./main-screen";

const mapStateToProps = (state) => ({
  films: state.DATA.films
});

export default connect(mapStateToProps)(MainScreen);
