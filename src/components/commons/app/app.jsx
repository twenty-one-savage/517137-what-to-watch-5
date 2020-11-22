import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../../screens/main-screen/main-screen.connect";
import AddReviewScreen from "../../screens/add-review-screen/add-review-screen.connect";
import FilmScreen from "../../screens/film-screen/film-screen.connect";
import MyListScreen from "../../screens/my-list-screen/my-list-screen.connect";
import PlayerScreen from "../../screens/player-screen/player-screen";
import SignInScreen from "../../screens/sign-in-screen/sign-in-screen.connect";
import PrivateRoute from "../../services/private-route/private-route.connect";
import {getMatchingFilm} from "../../../utils/common";
import browserHistory from "../../../browser-history";
import withPlayer from "../../../hocs/with-player/with-player";
import {checkAuth, fetchFilmList} from "../../../store/api-actions";
import appProp from "./app.prop";

const PlayerWrapped = withPlayer(PlayerScreen);

// const App = (props) => {
//   const {films} = props;
//   return (
//     <BrowserRouter history={browserHistory}>
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={({history}) => (
//             <MainScreen
//               film={films[0]}
//               btnPlayHandler={(id) => history.push(`/player/${id}`)}
//             />
//           )}
//         />
//         <Route exact path="/login">
//           <SignInScreen />
//         </Route>
//         <PrivateRoute
//           exact
//           path={`/mylist`}
//           render={() => {
//             return (
//               <MyListScreen/>
//             );
//           }}
//         />
//         <Route
//           exact
//           path="/films/:id/review"
//           render={(params) => (
//             <AddReviewScreen {...params} />
//           )}
//         />
//         <Route
//           exact
//           path="/films/:id?"
//           render={({history, match}) => (
//             <FilmScreen
//               film={getMatchingFilm(films, match)}
//               btnPlayHandler={(id) => history.push(`/player/${id}`)}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/player/:id"
//           render={({match, history}) => (
//             <PlayerWrapped
//               film={getMatchingFilm(films, match)}
//               handlePlayerExitClick={() => history.goBack()}
//             />
//           )}
//         />
//       </Switch>
//     </BrowserRouter>
//   );
// };

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    // Здесь я хотел добиться деструктуризации
    // const {films, store} = this.props;
    // Object.assign(this, {films, store});
    this.films = this.props.films;
    this.store = this.props.store;
  }

  componentDidMount() {
    Promise.all([
      this.store.dispatch(fetchFilmList()),
      this.store.dispatch(checkAuth()),
    ]);
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            render={({history}) => (
              <MainScreen
                film={this.films[0]}
                btnPlayHandler={(id) => history.push(`/player/${id}`)}
              />
            )}
          />
          <Route exact path="/login">
            <SignInScreen/>
          </Route>
          <PrivateRoute
            exact
            path={`/mylist`}
            render={() => {
              return (
                <MyListScreen/>
              );
            }}
          />
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
            render={({history, match}) => (
              <FilmScreen
                film={getMatchingFilm(this.films, match)}
                btnPlayHandler={(id) => history.push(`/player/${id}`)}
              />
            )}
          />
          <Route
            exact
            path="/player/:id"
            render={({match, history}) => (
              <PlayerWrapped
                film={getMatchingFilm(this.films, match)}
                handlePlayerExitClick={() => history.goBack()}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = appProp;

export default App;
