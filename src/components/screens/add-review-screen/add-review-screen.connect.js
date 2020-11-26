import {connect} from "react-redux";
import AddReviewScreen from "./add-review-screen";
import {addReview} from "../../../store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(filmId, authData) {
    dispatch(addReview(filmId, authData));
  }
});

export default connect(null, mapDispatchToProps)(AddReviewScreen);
