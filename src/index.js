import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {generateFilms} from "./mocks/films";

const films = generateFilms();

ReactDOM.render(
    <App
      films={films}
    />,
    document.querySelector(`#root`)
);
