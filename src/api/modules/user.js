import axios from "axios";
import {extractBodyResolve} from "../client";

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
        }
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
        employeeFull(userId) {

        }
    },
    update: {
        async myProfile() {
            return extractBodyResolve(
                axios.put("/api/user/my-profile")
            )
        },
        async employee(employeeId) {
            return extractBodyResolve(
                axios.put(`/api/user/view-profile/${employeeId}`)
            )
        },
    }
}