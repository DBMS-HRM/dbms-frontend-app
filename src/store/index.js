import { configureStore } from '@reduxjs/toolkit';
import {userActions} from "./user";
import {userTActions} from "./user";

import user from "./user";
import custom, {customActions, customTActions} from "./custom"

/**
 * Actions
 */

export const actions = {
    user: userActions,
    custom: customActions
}

/**
 * Asynchronous actions
 */

export const tActions = {
    user: userTActions,
    custom:customTActions
}

export default configureStore({
    reducer: {
        user,
        custom
    }
})