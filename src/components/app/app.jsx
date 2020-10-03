import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";

const App = (props) => {
  const {name, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            name={name}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id/review" component={AddReviewScreen} />
        <Route path="/films/:id?" exact component={FilmScreen} />
        <Route exact path="/player/:id" component={PlayerScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default App;
