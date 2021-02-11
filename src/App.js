import React, { Component } from 'react';
import SignIn from './components/SignIn';
//import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Test from "./test";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Layout from "./layout";
import Profile from './components/profile';


function App() {
  return (
    <div className = "App">
      <header className = "App-header">
      <MuiThemeProvider theme={theme}>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path="/test">
                          <Test />
                      </Route>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </MuiThemeProvider>
      <Profile />
      
     </header> 
    </div>
  );
 
}

export default App;