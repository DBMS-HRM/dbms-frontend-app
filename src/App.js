import React from "react";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Router from "./router";
import {useDispatch} from "react-redux";
import {userActions} from "./store/user";

function App() {
    const dispatch = useDispatch()
    dispatch(userActions.setToken(JSON.parse(window.localStorage.getItem("accessToken"))))
    dispatch(userActions.setUserData(JSON.parse(window.localStorage.getItem("userData"))))
    return (
        <MuiThemeProvider theme={theme}>
            <Router/>
        </MuiThemeProvider>
    );
}

export default App;