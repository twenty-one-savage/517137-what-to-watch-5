import {CommentLength} from "../../consts";

const withUserReview = (Component) => {
  class WithUserReview extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``
      };

      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._isValid = this._isValid.bind(this);
    }

    _isValid() {
      const {rating, comment} = this.state;
      return (rating > 0) && (comment.length > CommentLength.MIN && comment.length <= CommentLength.MAX);
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const {rating, comment} = this.state;
      return (
        <Component
          {...this.props}
          rating={rating}
          comment={comment}
          isValid={this._isValid}
          fieldChangeHandler={this._handleFieldChange}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
