import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {generateFilms} from "./mocks/films";

// const Settings = {
//   NAME: `Ну, Погоди!`,
//   GENRE: `Cartoon`,
//   YEAR: 1969
// };

const films = generateFilms();

ReactDOM.render(
    <App
      films={films}
      // name={Settings.NAME}
      // genre={Settings.GENRE}
      // year={Settings.YEAR}
    />,
    document.querySelector(`#root`)
);
