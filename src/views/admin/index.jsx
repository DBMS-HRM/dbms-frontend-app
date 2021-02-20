import React from "react";
import {Route, Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";
import SignIn from "./sign-in";
import Layout from "../../layout";
import EmployeeDetails from "./employee-details";
import AddEmployee from "./add-employee";

export default function Admin() {
    let {path} = useRouteMatch();
    return (
      <Switch>
          <Route path={`${path}/sign-in`} component={SignIn} />
          <Layout>
              <Route path={`${path}/employee-details`} component={EmployeeDetails} />
              <Route path={`${path}/add-employee`} component={AddEmployee} />
          </Layout>
      </Switch>
    );
}