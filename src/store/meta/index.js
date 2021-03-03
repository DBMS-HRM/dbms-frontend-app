import {createSlice} from "@reduxjs/toolkit";
import api from "../../api";

/**
 * Convert camel case string to snake case
 * detect points only when there is a capital letter followed by a simple letter
 * @param text
 */
export function toSnakeCase(text) {
    return text.replace(/([a-z])([A-Z])/g, (l1, l2, l3) => `${l2}_${l3.toLowerCase()}`);
}

/**
 * Convert snake case string to camel case
 * detect points when there is a simple letter followed by a underscore
 * @param text
 */
export function toCamelCase(text) {
    return text.replace(/_([a-z])/g, (l1, l2) => `${l2.toUpperCase()}`);
}

export const metaSlice = createSlice({
    name: 'meta',
    initialState: {
        customColumns: [],
        branches: [],
        departments: [],
        payGrades: [],
    },
    reducers: {
        setMetaData(state, action) {
            const data = action.payload
            data.forEach((piece) => {
                const {metaName, metaData} = piece
                if (metaName === 'custom_columns') {
                    state.customColumns = (metaData || [])
                } else if (metaName === 'pay_grades') {
                    state.payGrades = (metaData || [])
                } else if (metaName === 'departments') {
                    state.departments = (metaData || []).map(d => d['department_name'])
                } else if (metaName === 'branches') {
                    state.branches = (metaData || []).map(b => b['branch_name'])
                }
            })
        }
    }
})




/**
 * Reducer
 */
export default metaSlice.reducer

/**
 * Actions
 */
export const metaActions = {
    ...metaSlice.actions
}



/**
 * Thunk Actions
 */
export function fetchMetaData() {
    return async (dispatch) => {
        const [res, data] = await api.meta.get.metadata()
        if (res.status !== 200) {
            console.log('Error while fetching meta data')
            return res;
        }

        console.log(data)
        dispatch(metaActions.setMetaData(data))
        return res;
    };
}

export function updateLeaveConfig({payGrade, annualLeaves, casualLeaves, maternityLeaves, nopayLeaves}) {
    return async (dispatch) => {
        const [res, data] = await api.leave.update.leaveConfigs(
            {payGrade, annualLeaves, casualLeaves, maternityLeaves, nopayLeaves}
            )
        if (res.status !== 200) {
            console.log("Error while updating leave config")
            return res;
        }

        console.log('Success')
        dispatch()
    }
}

export const metaTActions = {
    fetchMetaData
}


/**
 * Selectors
 */

const leaveConfig = (state) => {
    const rawData = state.meta.payGrades
    const res = {}

    rawData.forEach(piece => {
        res[toCamelCase(piece['pay_grade'])] = {
            annual: piece['annual_leaves'],
            casual:  piece['casual_leaves'],
            maternity: piece['maternity_leaves'],
            nopay: piece['nopay_leaves'],
        }
    })

    return res;
}

const customColumns = (state) => {
    const rawData = state.meta.customColumns
    const res = {}

    rawData.forEach(piece => {
        res[piece['custom_column']] = {
            dataType: piece['data_type'],
            defaultValue:  piece['default_value']
        }
    })

    return res;
}

const departments = (state) => state.departments
const branches = (state) => state.branches

export const metaSelectors = {
    leaveConfig,
    customColumns,
    departments,
    branches
}

