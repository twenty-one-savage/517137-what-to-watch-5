import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import MainScreen from "../../screens/main-screen/main-screen.connect";
import AddReviewScreen from "../../screens/add-review-screen/add-review-screen.connect";
import FilmScreen from "../../screens/film-screen/film-screen.connect";
import MyListScreen from "../../screens/my-list-screen/my-list-screen.connect";
import PlayerScreen from "../../screens/player-screen/player-screen";
import SignInScreen from "../../screens/sign-in-screen/sign-in-screen";
import {filmsType} from "../../../commonPropTypes";
import {getMatchingFilm} from "../../../utils/common";
import withPlayer from "../../../hocs/with-player/with-player";

const PlayerWrapped = withPlayer(PlayerScreen);

const App = (props) => {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainScreen
              film={films[0]}
              btnPlayHandler={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen/>
        </Route>
        <Route
          exact
          path="/films/:id/review"
          render={(params) => (
            <AddReviewScreen {...params} />
          )}
        />
        <Route
          exact
          path="/films/:id?"
          render={({match, history}) => (
            <FilmScreen
              film={getMatchingFilm(films, match)}
              btnPlayHandler={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={({match, history}) => (
            <PlayerWrapped
              film={getMatchingFilm(films, match)}
              handlePlayerExitClick={() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  films: state.films
});

App.propTypes = filmsType;

export {App};
export default connect(mapStateToProps)(App);
