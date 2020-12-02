import BtnShowMore from "../../components/commons/btn-show-more/btn-show-more";
import {Film} from "../../consts";
import {filmsType} from "../../commonPropTypes";

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeNumberOfFilms: Film.COUNT.main,
      };

      this.showMoreFilms = this.showMoreFilms.bind(this);
    }

    showMoreFilms() {
      this.setState({activeNumberOfFilms: this.state.activeNumberOfFilms + Film.COUNT.main});
    }

    render() {
      return (
        <>
          <Component
            {...this.props}
            activeNumberOfFilms={this.state.activeNumberOfFilms}
          />
          {this.state.activeNumberOfFilms < this.props.films.length &&
          <BtnShowMore
            onClick={this.showMoreFilms}
          />}
        </>
      );
    }
  }
  WithShowMore.propTypes = {
    films: filmsType,
  };

  return WithShowMore;
};

export default withShowMore;
