import React from "react";
import {Route, Switch} from "react-router-dom";
import {Redirect, useRouteMatch} from "react-router";
import SignIn from "./sign-in";
import Layout from "../../layout";
import AddEmployee from "./add-employee";
import Dashboard from "./dashboard";
import AddAdmin from "./add-admin";
import CustomFields from "./custom-employee-attributes";

export default function Admin() {
    let {path} = useRouteMatch();
    const token = window.localStorage.getItem("accessToken")
    return (
      <Switch>
          <Route path={`${path}/sign-in`} component={SignIn} />
          {
              token ?
                  <Layout>
                      <Route path={`${path}/add-employee`} component={AddEmployee} />
                      <Route path={`${path}/add-admin`} component={AddAdmin} />
                      <Route exact path={path} component={Dashboard} />
                      <Route path={`${path}/custom-fields`} component={CustomFields} />
                  </Layout>
                  :
                  <Redirect to={`${path}/sign-in`} />
          }
      </Switch>
    );
}