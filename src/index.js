import ReactDOM from "react-dom";
import App from "./components/app/app";
import {generateFilms} from "./mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const films = generateFilms();

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
