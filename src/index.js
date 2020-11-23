import ReactDOM from "react-dom";
import App from "./components/commons/app/app.connect";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {requiredAuthorization} from "./store/action";
import {fetchFilmList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./consts";
import rootReducer from "./store/reducers/root-reducer";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.querySelector(`#root`)
);

// Promise.all([
//   store.dispatch(fetchFilmList()),
//   store.dispatch(checkAuth())
// ])
//   .then(() => {
//     ReactDOM.render(
//         <Provider store={store}>
//           <App store={store}/>
//         </Provider>,
//         document.querySelector(`#root`)
//     );
//   });
