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

    },
    get: {
        employee() {

        },

        employeeFull(userId) {

        }
    }
}