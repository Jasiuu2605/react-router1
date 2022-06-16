import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

import "../styles/App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>
          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
