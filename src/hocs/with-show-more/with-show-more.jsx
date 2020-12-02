import BtnShowMore from "../../components/commons/btn-show-more/btn-show-more";
import {FilmsCount} from "../../consts";
import {filmsType} from "../../commonPropTypes";

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeNumberOfFilms: FilmsCount.MAIN,
      };

      this.showMoreFilms = this.showMoreFilms.bind(this);
    }

    showMoreFilms() {
      this.setState({activeNumberOfFilms: this.state.activeNumberOfFilms + FilmsCount.MAIN});
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
