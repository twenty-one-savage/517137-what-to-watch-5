import {connect} from "react-redux";
import PlayerScreen from "./player-screen";

const mapStateToProps = (state) => ({
  films: state.films
});

export default connect(mapStateToProps)(PlayerScreen);
