import axios from "axios";
import {extractBodyResolve} from "../client";

export default {
    get: {
        async leaves(query) {
            return extractBodyResolve(
                axios.get(`/api/leave/get-all?leaveStatus=${query}`)
            )
        },
    }
}