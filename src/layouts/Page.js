import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductListPage from "../pages/ProductListPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact"  component={ContactPage} />
        <Route path="/products"  component={ProductListPage} />
        <Route path="/product/:id"  component={ProductPage} />
        <Route path="/admin"  component={AdminPage} />
        <Route path="/login"  component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
