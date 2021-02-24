import { configureStore } from '@reduxjs/toolkit';
import {userActions} from "./user";
import {userTActions} from "./user";

import user from "./user";

export default configureStore({
    reducer: {
        user
    }
})

/**
 * Actions
 */

export const actions = {
    user: userActions
}

/**
 * Asynchronous actions
 */

export const tActions = {
    user: userTActions
}