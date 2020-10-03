import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {name, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            name={name}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path="/login">

        </Route>
        <Route exact path="/mylist">

        </Route>
        <Route exact path="/films/:id">

        </Route>
        <Route exact path="/films/:id/review">

        </Route>
        <Route exact path="/player/:id">

        </Route>
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
