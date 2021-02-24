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
        dispatch(userActions.setToken(data.token))
        dispatch(userActions.setUserData(data.data))

        return res;
    };
}

export function employeeLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.employee(username, password)
        console.log(res,data)
        if (res.status !== 200) {
            return res;
        }

        // Login success
        dispatch(userActions.setToken(data.token))
        dispatch(userActions.setUserData(data.data))

        return res;
    };
}