import React from "react"
import Layout from "../../layout"
import {Redirect, useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import SignIn from "../admin/sign-in";
import AddEmployee from "../admin/add-employee";
import AddAdmin from "../admin/add-admin";
import CustomFields from "../admin/custom-employee-attributes";
import Dashboard from "../admin/dashboard";
import OrderByReport from "./order-by";
import LeaveReport from "./total-leaves-by-department";

import HomePage from "./homepage"

import {employeeAccountTypes} from "../../helpers/variables";

export default function Router () {

    let {path} = useRouteMatch();
    const token = window.localStorage.getItem("accessToken")
    const user = JSON.parse(window.localStorage.getItem("userData"))
    return (
        <Switch>
            {
                token && employeeAccountTypes.includes(user.accountType) ?
                    <Layout>
                        <Route path={`${path}/order-by`} component={OrderByReport} />
                        <Route path={`${path}/total-leaves-by-department`} component={LeaveReport} />
                        <Route path={`${path}/homepage`} component={HomePage} />
                    </Layout>
                    :
                    <Redirect to={`employee/sign-in`} />
            }
        </Switch>
    );
}