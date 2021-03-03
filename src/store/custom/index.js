import {createSlice} from "@reduxjs/toolkit";
import {getCustomAttributes} from "./thunk";
/**
 * Asynchronous actions
 */
import {
} from "./thunk";

export const customDataSlice = createSlice({
    name: 'custom',
    initialState: {
        remainingLeaves: {
            annual: 0,
            casual: 0,
            maternity: 0,
            noPay: 0
        },
        totalLeaves: {
            annual: 0,
            casual: 0,
            maternity: 0,
            noPay: 0
        },
        customAttributes: []
    },
    reducers: {
        setRemainingLeaves(state, action) {
            state.remainingLeaves = action.payload
        },
        setTotalLeaves(state, action) {
            state.totalLeaves = action.payload
        },
        setCustomAttributes(state, action) {
            state.customAttributes = action.payload
        },
    }
})

export default customDataSlice.reducer

// export const selectRemainingLeaves = state => state.custom.remainingLeaves
// export const selectTotalLeaves = state => state.custom.totalLeaves
// export const selectCustomAttributes = state => state.custom.customAttributes

export const customActions = {...customDataSlice.actions}
export const customTActions = {
    getCustomAttributes
}
