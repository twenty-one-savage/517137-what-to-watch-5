import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  NAME: `Ну, Погоди!`,
  GENRE: `Cartoon`,
  YEAR: 1969
};

ReactDOM.render(
    <App
      name={Settings.NAME}
      genre={Settings.GENRE}
      year={Settings.YEAR}
    />,
    document.querySelector(`#root`)
);
