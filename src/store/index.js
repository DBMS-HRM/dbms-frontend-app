import { configureStore } from '@reduxjs/toolkit'

import user from "./user";

export default configureStore({
    reducer: {
        user
    }
})

/**
 * Actions
 */
import {userActions} from "./user";
export const actions = {
    user: userActions
}

/**
 * Asynchronous actions
 */
import {userTActions} from "./user";
export const tActions = {
    user: userTActions
}