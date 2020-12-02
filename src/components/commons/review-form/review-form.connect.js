import {connect} from "react-redux";
import ReviewForm from "./review-form";
import {addReview} from "../../../store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, authData, error) {
    dispatch(addReview(id, authData, error));
  }
});

export default connect(null, mapDispatchToProps)(ReviewForm);
