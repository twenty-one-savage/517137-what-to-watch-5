import ReactDOM from "react-dom";
import App from "./components/commons/app/app";
import {allFilms} from "./mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={allFilms}
      />
    </Provider>,
    document.querySelector(`#root`)
);
