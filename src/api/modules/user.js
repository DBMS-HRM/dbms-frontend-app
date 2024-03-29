import axios from "axios";
import {extractBodyResolve, extractDataResolve} from "../client";

export default {
    login: {
        async employee(username, password) {
            return extractBodyResolve(
                axios.post("/api/user/login/employee", {username, password})
            )
        },
        async admin(username, password) {
            return extractBodyResolve(
                axios.post("/api/user/login/admin", {username, password})
            )
        }
    },
    add: {
        async managerialEmployee(formData) {
            return extractBodyResolve(
                axios.post("/api/user/register/managerial-employee", formData)
            )
        },
        async employee(formData) {
            return extractBodyResolve(
                axios.post("/api/user/register/employee", formData)
            )
        },
        async admin(formData) {
            return extractBodyResolve(
                axios.post("/api/user/register/admin", formData)
            )
        },
        async supervisor(formData) {
            return extractBodyResolve(
                axios.post("/api/user/set-supervisor", formData)
            )
        },
        async newCustomAttribute(formData) {
            return extractBodyResolve(
                axios.post("/api/user/insert-custom-attributes", formData)
            )
        },
    },
    get: {
        async myProfile() {
            return extractBodyResolve(
                axios.get("/api/user/my-profile")
            )
        },
        async employee(employeeId) {
            return extractBodyResolve(
                axios.get(`/api/user/view-profile/${employeeId}`)
            )
        },
        async employeeAll() {
            return extractBodyResolve(
                axios.get("/api/user/get-employees")
            )
        },
        async customEmployeeAttributes() {
            return extractDataResolve(
                axios.get("/api/user/get-custom-attributes")
            )
        },
        async potentialSupervisors() {
            return extractDataResolve(
                axios.get("/api/user/get-supervisors")
            )
        },
        async subordinates() {
            return extractDataResolve(
                axios.get("/api/user/get-my-subordinates")
            )
        },
    },
    update: {
        async myProfile(formData) {
            return extractBodyResolve(
                axios.put("/api/user/my-profile", formData)
            )
        },
        async employee(employeeId) {
            return extractBodyResolve(
                axios.put(`/api/user/view-profile/${employeeId}`)
            )
        },
        async resetPassword(employeeId, formData) {
            return extractBodyResolve(
                axios.put(`/api/user/forgot-employee-password/${employeeId}`,formData)
            )
        },
        async changeMyPassword(formData) {
            return extractBodyResolve(
                axios.put(`/api/user/update-employee-password`,formData)
            )
        },
    },
    delete: {
        async removeCustomAttribute(columnName) {
            return extractBodyResolve(
                axios.delete(`/api/user/delete-custom-attributes/${columnName}`)
            )
        },
    }
}