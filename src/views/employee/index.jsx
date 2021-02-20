import React from "react";
import {useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard";
import SignIn from "./sign-in";
import Profile from "./profile";
import Layout from "../../layout";

export default function Employee() {
    let {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/sign-in`} component={SignIn} />
            <Layout>
                <Route path={`${path}/dashboard`} component={Index} />
                <Route path={`${path}/profile`} component={Profile} />
            </Layout>
        </Switch>
    )
}