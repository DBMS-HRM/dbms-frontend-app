import React from "react";
import {Route, Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";
import SignIn from "./sign-in";
import Layout from "../../layout";
import EmployeeDetails from "../employee/employee-details";
import AddEmployee from "../employee/add-employee";
import Dashboard from "./dashboard";
import {useSelector} from "react-redux";
import {selectUser} from "../../store/user";

export default function Admin() {
    let {path} = useRouteMatch();
    let userAccountType = useSelector(selectUser).accountType
    return (
      <Switch>
          <Route path={`${path}/sign-in`} component={SignIn} />
          <Layout>
              <Route path={`${path}/employee-details`} component={EmployeeDetails} />
              <Route path={`${path}/add-employee`} component={AddEmployee} />
              <Route exact path={path} component={Dashboard} />
          </Layout>
      </Switch>
    );
}