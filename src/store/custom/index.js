import {createSlice} from "@reduxjs/toolkit";

/**
 * Asynchronous actions
 */
import {
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
