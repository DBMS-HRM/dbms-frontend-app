import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Employee from "../views/employee";
import Admin from "../views/admin";
import Report from "../views/reports";

export default function AppRouter() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/employee/sign-in" />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/employee">
                    <Employee />
                </Route>
                <Route path="/reports">
                    <Report />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}