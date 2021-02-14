import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Test from "./test";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Layout from "./layout";
import './App.css';
import Index from "./views/employeeDetails/Index";
import PersonalDetailForm from "./views/addEmployee/personalDetailForm";
import Checkout from "./views/addEmployee/checkout";

import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path="/test">
                          <Test />
                      </Route>
                      <Route path="/employees">
                          <Index />
                      </Route>
                      <Route path="/employee/add">
                          <Checkout />
                      </Route>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </MuiThemeProvider>
  );
}

export default App;