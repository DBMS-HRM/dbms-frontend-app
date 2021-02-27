import React from "react";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Router from "./router";
import {useDispatch} from "react-redux";
import {userActions} from "./store/user";
import {toast, ToastContainer} from "react-toastify";
import {setAuthToken} from "./api/client";

import 'react-toastify/dist/ReactToastify.css';
function App() {
    const dispatch = useDispatch()
    const token = JSON.parse(window.localStorage.getItem("accessToken"))
    const userData = JSON.parse(window.localStorage.getItem("userData"))
    if(token) setAuthToken(token.access)
    dispatch(userActions.setToken(token))
    dispatch(userActions.setUserData(userData))
    return (
        <div>
            <ToastContainer />
            <MuiThemeProvider theme={theme}>
                <Router/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;