import thunk from "redux-thunk";
import api from "../../api";
import {userActions} from "./index";

export function adminLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.admin(username, password)
        if (res.status !== 200) {
            return res;
        }
        window.localStorage.setItem("accessToken", JSON.stringify(data.token))
        window.localStorage.setItem("userData", JSON.stringify(data.data))
        // Login success
        dispatch(userActions.setToken(data.token))
        dispatch(userActions.setUserData(data.data))

        return res;
    };
}

export function employeeLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.employee(username, password)
        if (res.status !== 200) {
            return res;
        }
        window.localStorage.setItem("accessToken", JSON.stringify(data.token))
        window.localStorage.setItem("userData", JSON.stringify(data.data))
        // Login success
        dispatch(userActions.setToken(data.token))
        dispatch(userActions.setUserData(data.data))

        return res;
    };
}

export function addEmployee(formData) {
    return async (dispatch) => {
        const [res, data] = await api.user.add.employee(formData)
        if (res.status !== 200) {
            return res;
        }
        return res;
    }
}