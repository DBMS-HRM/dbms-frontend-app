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
        payGrades: {
            "Level 1": {
                annual: 0,
                casual: 0,
                maternity: 0,
                nopay: 0
            },
            "Level 2": {
                annual: 0,
                casual: 0,
                maternity: 0,
                nopay: 0
            },
            "Level 3": {
                annual: 0,
                casual: 0,
                maternity: 0,
                nopay: 0
            }
        },
    },
    reducers: {
        setMetaData(state, action) {
            const data = action.payload
            data.forEach((piece) => {
                const {metaName, metaData} = piece
                if (metaName === 'custom_columns') {
                    const rawData = (metaData || [])
                    rawData.forEach(piece => {
                        state.customColumns[piece['custom_column']] = {
                            dataType: piece['data_type'],
                            defaultValue:  piece['default_value']
                        }
                    })
                } else if (metaName === 'pay_grades') {
                    const rawData = (metaData || [])
                    rawData.forEach(piece => {
                        state.payGrades[piece['pay_grade']] = {
                            annual: piece['annual_leaves'],
                            casual:  piece['casual_leaves'],
                            maternity: piece['maternity_leaves'],
                            nopay: piece['nopay_leaves'],
                        }
                    })
                } else if (metaName === 'departments') {
                    state.departments = (metaData || []).map(d => d['department_name'])
                } else if (metaName === 'branches') {
                    state.branches = (metaData || []).map(b => b['branch_name'])
                }
            })
        },
        updatePayGradeConfig(state, action) {
            const data = action.payload
            state.payGrades[data.payGrade] = {
                annual: data.annualLeaves,
                casual: data.casualLeaves,
                maternity: data.maternityLeaves,
                nopay: data.nopayLeaves
            }
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
        const data = {payGrade, annualLeaves, casualLeaves, maternityLeaves, nopayLeaves}
        const [res] = await api.leave.update.leaveConfigs(
            data
            )
        if (res.status !== 200) {
            console.log("Error while updating leave config")
            return res;
        }

        dispatch(metaActions.setMetaData(data))
    }
}

export const metaTActions = {
    fetchMetaData
}


/**
 * Selectors
 */

const leaveConfig = (state) => state.meta.payGrades
const customColumns = (state) => state.meta.customColumns
const departments = (state) => state.departments
const branches = (state) => state.branches

export const metaSelectors = {
    leaveConfig,
    customColumns,
    departments,
    branches
}

