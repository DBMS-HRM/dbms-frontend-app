import React from "react";
import {Redirect, useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard";
import SignIn from "./sign-in";
import Profile from "./profile";
import AddLeave from "./addLeave";
import Layout from "../../layout";
import AddEmployee from "./add-employee"

export default function Employee() {
    let {path} = useRouteMatch();
    const token = window.localStorage.getItem("accessToken")
    return (
        <Switch>
            <Route path={`${path}/sign-in`} component={SignIn} />
            {
                token ?
                    <Layout>
                        <Route path={`${path}/profile`} component={Profile} />
                        <Route path={`${path}/add-leave`} component={AddLeave} />
                        <Route path={`${path}/add-employee`} component={AddEmployee} />
                        <Route exact path={`${path}`} component={Index} />
                    </Layout>
                    :
                    <Redirect to={`${path}/sign-in`} />
            }
        </Switch>
    )
}
