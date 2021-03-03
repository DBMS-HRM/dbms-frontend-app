import axios from "axios";
import {extractBodyResolve} from "../client";

export default {
    get: {
        async supervisorLeaves(params) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-supervisor-all`, {params: params})
            )
        },
        async myLeaves(params) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-my-all`,{params: params})
            )
        },
        async leave(query) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-all?leaveId=${query}`)
            )
        },
        async remainingLeaves(query) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-remaining-leaves?userId=${query}`)
            )
        },
        async remainingSubordinateLeaves(employeeId) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-remaining-leaves/${employeeId}`)
            )
        },
        async leaveConfigs() {
            return extractBodyResolve(
                axios.get(`/api/leave/config-leaves`)
            )
        }
    },
    add: {
        async leave(formData) {
            return extractBodyResolve(
                axios.post('/api/leave/add-leave', formData)
            )
        }
    },
    update: {
        async leave(formData, query) {
            return extractBodyResolve(
                axios.put(`/api/leave/change-leave-status/${query}`, formData)
            )
        },
        async leaveConfigs(data) {
            return extractBodyResolve(
                axios.put(`/api/leave/config-leaves`,
                    data)
            )
        }
    }
}