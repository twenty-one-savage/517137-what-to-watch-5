import {connect} from "react-redux";
import MyListScreen from "./my-list-screen";

const mapStateToProps = (state) => ({
  films: state.DATA.films
});

export default connect(mapStateToProps)(MyListScreen);
