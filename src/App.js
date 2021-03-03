import React, {useEffect} from "react";
import theme from "./theme/Theme";
import {MuiThemeProvider} from "@material-ui/core";
import Router from "./router";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "./store/user";
import {toast, ToastContainer} from "react-toastify";
import {setAuthToken} from "./api/client";
import {actions, tActions, selectors} from "./store";

import 'react-toastify/dist/ReactToastify.css';
import {customActions} from "./store/custom";
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem("accessToken"))
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        // const customAttributes = JSON.parse(window.localStorage.getItem("customAttributes"))
        if (token) {
            setAuthToken(token.access)
            dispatch(actions.user.setToken(token))
        }
        if (userData) dispatch(actions.user.setUserData(userData))
        dispatch(tActions.meta.fetchMetaData())
    }, [])
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