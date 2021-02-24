import thunk from "redux-thunk";
import api from "../../api";
import {userActions} from "./index";

export function adminLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.admin(username, password)
        if (res.status !== 200) {
            return res;
        }

        // Login success
        const {token, userData} = data
        dispatch(userActions.setToken(token))
        dispatch(userActions.setUserData(userData))

        return res;
    };
}

export function employeeLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.employee(username, password)
        if (res.status !== 200) {
            return res;
        }

        // Login success
        const {token, userData} = data
        dispatch(userActions.setToken(token))
        dispatch(userActions.setUserData(userData))

        return res;
    };
}