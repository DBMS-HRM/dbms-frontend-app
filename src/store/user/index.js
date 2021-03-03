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
            supervisorId: null
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


/**
 * Selectors
 */
const user = state => state.user.user
const accountType = (state) => state.user.user.accountType
const isSupervisor = (state) => state.user.user.supervisor
const haveSupervisor = (state) => state.user.user.supervisorId !== null
export const userSelectors = {
    user,
    accountType,
    isSupervisor,
    haveSupervisor
}