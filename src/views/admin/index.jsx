import React from "react";
import {Route, Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";
import SignIn from "./sign-in";
import Layout from "../../layout";
import EmployeeDetails from "./employee-details";
import AddEmployee from "./add-employee";
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
          </Layout>
      </Switch>
    );
}