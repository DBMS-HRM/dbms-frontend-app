import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Test from "./test";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Layout from "./layout";
import EmployeeDetails from "./views/employeeDetails/EmployeeDetails";

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
                          <EmployeeDetails />
                      </Route>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </MuiThemeProvider>
  );
}

export default App;
