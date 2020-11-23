import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => ({
  films: state.DATA.films
});

export default connect(mapStateToProps)(App);
