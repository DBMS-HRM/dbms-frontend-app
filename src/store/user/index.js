import {createSlice} from "@reduxjs/toolkit";

/**
 * Asynchronous actions
 */
import {
    adminLogin,
    employeeLogin,
    addEmployee,
    addManagerialEmployee,
    addAdmin,
    getEmployee,
    getEmployeesAll,
    getCustomEmployeeAttributes,
    updateEmployee,
    updateMyProfile,
    updatePassword,
    updateMyPassword
} from "./thunk";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: {
            access: ''
        },
        user: {
            username: '',
            userId: '',
            email: '',
            status: null,
            accountType: '',
            supervisor: false,
        },
        routerRoots: {

        }
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setUserData(state, action) {
            state.user = action.payload
        }
    }
})

/**
 * Reducer
 */
export default userSlice.reducer

export const selectUser = state => state.user.user
export const selectToken = state => state.user.token

/**
 * Actions
 */
export  const userActions = {
    ...userSlice.actions
}
export  const userTActions = {
    adminLogin,
    employeeLogin,
    addEmployee,
    addManagerialEmployee,
    addAdmin,
    getEmployee,
    getEmployeesAll,
    getCustomEmployeeAttributes,
    updateEmployee,
    updateMyProfile,
    updatePassword,
    updateMyPassword
}

