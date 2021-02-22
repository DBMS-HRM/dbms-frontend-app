import React from "react";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Router from "./router";
import api from "./api";
function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router/>
        </MuiThemeProvider>
    );
}

export default App;