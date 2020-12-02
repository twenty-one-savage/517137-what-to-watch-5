import {connect} from "react-redux";
import TabReviews from "./tab-reviews";

const mapStateToProps = (state) => ({
  reviews: state.DATA.comments
});

export default connect(mapStateToProps)(TabReviews);
