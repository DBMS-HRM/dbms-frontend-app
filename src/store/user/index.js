import {createSlice} from "@reduxjs/toolkit";

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

/**
 * Actions
 */
export  const userActions = {
    ...userSlice.actions
}

/**
 * Asynchronous actions
 */
import {adminLogin} from "./thunk";
export  const userTActions = {
    adminLogin
}

