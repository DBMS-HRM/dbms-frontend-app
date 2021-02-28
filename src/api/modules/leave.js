import axios from "axios";
import {extractBodyResolve} from "../client";

export default {
    get: {
        async leaves(query) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-all?leaveStatus=${query}`)
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
    }
}