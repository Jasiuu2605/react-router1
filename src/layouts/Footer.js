import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = (props) => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na stronie <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na stronie <span>{props.match.params.idProduct}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
