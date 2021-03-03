import React from "react";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Router from "./router";
import {useDispatch} from "react-redux";
import {userActions} from "./store/user";
import {toast, ToastContainer} from "react-toastify";
import {setAuthToken} from "./api/client";
import {actions, tActions} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import {customActions} from "./store/custom";
function App() {
    const dispatch = useDispatch()
    const token = JSON.parse(window.localStorage.getItem("accessToken"))
    const userData = JSON.parse(window.localStorage.getItem("userData"))
    const customAttributes = JSON.parse(window.localStorage.getItem("customAttributes"))
    if(token) setAuthToken(token.access)
    dispatch(actions.user.setToken(token))
    dispatch(actions.user.setUserData(userData))
    dispatch(tActions.meta.fetchMetaData())
    dispatch(actions.custom.setCustomAttributes(customAttributes))
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