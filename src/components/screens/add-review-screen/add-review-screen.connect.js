import {connect} from "react-redux";
import AddReviewScreen from "./add-review-screen";

const mapStateToProps = (state) => ({
  films: state.films
});

export default connect(mapStateToProps)(AddReviewScreen);
