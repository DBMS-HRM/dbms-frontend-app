import { configureStore } from '@reduxjs/toolkit';
import {userActions, userSelectors} from "./user";
import {userTActions} from "./user";

import user from "./user";
import meta, {metaActions, metaSelectors, metaTActions} from "./meta"
import custom, {customActions, customTActions} from "./custom"

/**
 * Actions
 */

export const actions = {
    user: userActions,
    meta: metaActions,
    custom: customActions
}

/**
 * Asynchronous actions
 */

export const tActions = {
    user: userTActions,
    meta: metaTActions,
    custom:customTActions
}

/**
 * Selectors
 */
export const  selectors = {
    user: userSelectors,
    meta: metaSelectors
}

export default configureStore({
    reducer: {
        user,
        meta,
        custom
    }
})


