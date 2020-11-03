import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../../screens/main-screen/main-screen.connect";
import AddReviewScreen from "../../screens/add-review-screen/add-review-screen.connect";
import FilmScreen from "../../screens/film-screen/film-screen.connect";
import MyListScreen from "../../screens/my-list-screen/my-list-screen.connect";
import PlayerScreen from "../../screens/player-screen/player-screen.connect";
import SignInScreen from "../../screens/sign-in-screen/sign-in-screen";
import {filmsType} from "../../../commonPropTypes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <MainScreen {...props} />
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
          render={(props) => (
            <AddReviewScreen {...props} />
          )}
        />
        <Route
          exact
          path="/films/:id?"
          render={(props) => (
            <FilmScreen {...props} />
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={(props) => (
            <PlayerScreen {...props} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = filmsType;

export default App;
