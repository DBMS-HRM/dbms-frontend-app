import React from "react";
import {Redirect, useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard";
import SignIn from "./sign-in";
import Profile from "./profile";
import AddLeave from "./add-leave";
import Layout from "../../layout";
import AddEmployee from "./add-employee"
import EmployeeDetails from "./employee-details";
import ShowLeaves from "./show-leaves";
import ApproveLeave from "./approve-leaves";
import ShowMyLeaves from "./show-leaves/my";

export default function Employee() {
    let {path} = useRouteMatch();
    const token = window.localStorage.getItem("accessToken")
    const user = window.localStorage.getItem("userData")
    return (
        <Switch>
            <Route path={`${path}/sign-in`} component={SignIn} />
            {
                token ?
                    <Layout>
                        <Route path={`${path}/profile`} component={Profile} />
                        <Route path={`${path}/add-leave`} component={AddLeave} />
                        <Route path={`${path}/add-employee`} component={AddEmployee} />
                        <Route path={`${path}/details`} component={EmployeeDetails} />
                        <Route path={`${path}/show-leaves-requested`} component={ShowMyLeaves} />
                        <Route path={`${path}/show-leaves`} component={ShowLeaves} />
                        <Route path={`${path}/approve-leaves/:leaveId/:employeeId`} component={ApproveLeave} />
                        <Route exact path={`${path}`} component={Index} />
                    </Layout>
                    :
                    <Redirect to={`${path}/sign-in`} />
            }
        </Switch>
    )
}
