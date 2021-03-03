import axios from "axios";
import {extractDataResolve} from "../client";

export default {
    get: {
        async metadata() {
            return extractDataResolve(
                axios.get('/api/meta/get-metadata')
            )
        }
    },
}