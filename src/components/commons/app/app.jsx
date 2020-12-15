import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../../screens/main-screen/main-screen.connect";
import AddReviewScreen from "../../screens/add-review-screen/add-review-screen";
import FilmScreen from "../../screens/film-screen/film-screen.connect";
import MyListScreen from "../../screens/my-list-screen/my-list-screen.connect";
import PlayerScreen from "../../screens/player-screen/player-screen";
import SignInScreen from "../../screens/sign-in-screen/sign-in-screen.connect";
import PrivateRoute from "../../services/private-route/private-route.connect";
import {getMatchingFilm} from "../../../utils/common";
import browserHistory from "../../../browser-history";
import withPlayer from "../../../hocs/with-player/with-player";
import appProp from "./app.prop";
import PageNotFound from "../../screens/page-not-found/page-not-found";
import withUserReview from "../../../hocs/with-user-review/with-user-review";
import {AppRoute} from "../../../consts";

const PlayerWrapped = withPlayer(PlayerScreen);
const AddReviewScreenWrapped = withUserReview(AddReviewScreen);

class App extends React.PureComponent {
  componentDidMount() {
    this.props.initApplication();
  }

  render() {
    const {films, isApplicationReady} = this.props;

    if (!isApplicationReady) {
      return null;
    }

    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            render={({history}) => (
              <MainScreen
                btnPlayHandler={(id) => history.push(`/player/${id}`)}
              />
            )}
          />
          <Route exact path={AppRoute.LOGIN}>
            <SignInScreen/>
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => <MyListScreen/>}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}:id/review`}
            render={({match}) => (
              <AddReviewScreenWrapped
                film={getMatchingFilm(films, match)}
              />
            )}
          />
          <Route
            exact
            path={`${AppRoute.FILMS}:id?`}
            render={({history, match}) => (
              <FilmScreen
                film={getMatchingFilm(films, match)}
                btnPlayHandler={(id) => history.push(`/player/${id}`)}
              />
            )}
          />
          <Route
            exact
            path={`${AppRoute.PLAYER}:id`}
            render={({match, history}) => (
              <PlayerWrapped
                film={getMatchingFilm(films, match)}
                handlePlayerExitClick={() => history.goBack()}
              />
            )}
          />
          <Route
            path={AppRoute.ANY}
            component={PageNotFound}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = appProp;

export default App;
