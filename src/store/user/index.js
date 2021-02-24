import {createSlice} from "@reduxjs/toolkit";

/**
 * Asynchronous actions
 */
import {adminLogin, employeeLogin} from "./thunk";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: {
            access: ''
        },
        user: {
            userId: '',
            accountType: ''
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

export const selectUser = state => state.user

/**
 * Actions
 */
export  const userActions = {
    ...userSlice.actions
}
export  const userTActions = {
    adminLogin,
    employeeLogin
}

