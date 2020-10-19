import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../../screens/main-screen/main-screen";
import AddReviewScreen from "../../screens/add-review-screen/add-review-screen";
import FilmScreen from "../../screens/film-screen/film-screen";
import MyListScreen from "../../screens/my-list-screen/my-list-screen";
import PlayerScreen from "../../screens/player-screen/player-screen";
import SignInScreen from "../../screens/sign-in-screen/sign-in-screen";
import {filmsType} from "../../../utils/types";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            films={films}/>
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films}/>
        </Route>
        <Route exact path="/films/:id/review" component={AddReviewScreen} />
        <Route
          exact
          path="/films/:id?"
          render={(params) => (
            <FilmScreen {...params} films={films} />
          )}
        />
        <Route exact path="/player/:id" component={PlayerScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = filmsType;

export default App;