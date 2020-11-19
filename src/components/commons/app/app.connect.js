import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => ({
  films: state.films
});

export default connect(mapStateToProps)(App);
