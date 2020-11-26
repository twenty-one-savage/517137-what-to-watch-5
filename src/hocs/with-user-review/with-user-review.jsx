import {extend} from "../../utils/common";

const withUserReview = (Component) => {
  class WithUserReview extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``,
        reviewValid: {
          rating: false,
          comment: false
        },
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
    }

    _handleRatingChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
        reviewValid: extend(this.state.reviewValid, {
          rating: value > 0
        })
      });
    }

    _handleCommentChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
        reviewValid: extend(this.state.reviewValid, {
          comment: (value.length > 40 && value.length <= 400)
        })
      });
    }

    // _handleFieldChange(evt) {
    //   const {name, value} = evt.target;
    //   this.setState({
    //     [name]: value
    //   });
    // }

    render() {
      const {rating, comment, reviewValid} = this.state;
      return (
        <Component
          {...this.props}
          rating={rating}
          comment={comment}
          reviewValid={reviewValid}
          ratingFieldChangeHandler={this._handleRatingChange}
          commentFieldChangeHandler={this._handleCommentChange}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
