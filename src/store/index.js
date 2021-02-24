import { configureStore } from '@reduxjs/toolkit'

import user from "./user";

/**
 * Actions
 */
import {userActions} from "./user";

/**
 * Asynchronous actions
 */
import {userTActions} from "./user";
export const actions = {
    user: userActions
}
export const tActions = {
    user: userTActions
}

export default configureStore({
    reducer: {
        user
    }
})