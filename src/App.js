import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Test from "./test";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Layout from "./layout";
import './App.css';

import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Layout/>
                        <Dashboard/>
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/test">
                        <Test/>
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/menu">
                        <Layout/>
                        <Menu/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;