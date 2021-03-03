import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Employee from "../views/employee";
import Admin from "../views/admin";
import Report from "../views/reports";
import {useSelector} from "react-redux";
import {selectUser} from "../store/user";
import HomePage from "../views/homepage";

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
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