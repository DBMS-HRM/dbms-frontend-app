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
        async employee() {
            return extractBodyResolve(
                axios.get("/api/user/my-profile")
            )
        },
        async employeeAll() {
            return extractBodyResolve(
                axios.get("/api/user/get-employees")
            )
        },
        employeeFull(userId) {

        }
    }
}