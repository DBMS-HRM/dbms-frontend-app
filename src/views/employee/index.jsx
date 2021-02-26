import React from "react";
import {useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard";
import SignIn from "./sign-in";
import Profile from "./profile";
import AddLeave from "./addLeave";
import Layout from "../../layout";
import AddEmployee from "./add-employee"

export default function Employee() {
    let {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/sign-in`} component={SignIn} />
            <Layout>
                <Route path={`${path}/dashboard`} component={Index} />
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/add-leave`} component={AddLeave} />
                <Route path={`${path}/add-employee`} component={AddEmployee} />
            </Layout>
        </Switch>
    )
}
