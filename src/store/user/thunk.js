import thunk from "redux-thunk";
import api from "../../api";
import {userActions} from "./index";
import {setAuthToken} from "../../api/client";

//***************************   login   ***************************************

export function adminLogin(username, password) {
    return async (dispatch) => {
        const [res, data] = await api.user.login.admin(username, password)
        if (res.status !== 200) {
            return res;
        }
        window.localStorage.setItem("accessToken", JSON.stringify(data.token))
        window.localStorage.setItem("userData", JSON.stringify(data.data))
        // Login success
        setAuthToken(data.token.access)
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
        setAuthToken(data.token.access)
        dispatch(userActions.setToken(data.token))
        dispatch(userActions.setUserData(data.data))

        return res;
    };
}

//***************************   add   ******************************************

export function addManagerialEmployee(formData) {
    return async () => {
        const [res, data] = await api.user.add.managerialEmployee(formData)
        if (res.status !== 200) {
            return res;
        }
        return res;
    }
}

export function addEmployee(formData) {
    return async () => {
        const [res, data] = await api.user.add.employee(formData)
        if (res.status !== 200) {
            return res;
        }
        return res;
    }
}

export function addAdmin(formData) {
    return async () => {
        const [res, data] = await api.user.add.admin(formData)
        if (res.status !== 200) {
            return res;
        }
        return res;
    }
}

//***************************   get   ******************************************

export function getEmployee(employeeId) {
    return async () => {
        const [res, data] = await api.user.get.employee(employeeId)
        if (res.status !== 200) {
            return [res,data];
        }
        return [res,data];
    }
}

export function getEmployeesAll() {
    return async () => {
        const [res, data] = await api.user.get.employeeAll()
        if (res.status !== 200) {
            return [res,data];
        }
        return [res,data];
    }
}

//***************************  Update   ******************************************

export function updateEmployee(employeeId) {
    return async () => {
        const [res, data] = await api.user.update.employee(employeeId)
        if (res.status !== 200) {
            return res;
        }
        return res;
    }
}