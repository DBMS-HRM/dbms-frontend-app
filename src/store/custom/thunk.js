import api from "../../api";
import {customActions} from "./index";

export function getCustomAttributes() {
    return async (dispatc) => {
        const [res, data] = await api.user.get.customEmployeeAttributes()
        if (res.status !== 200) {
            return res;
        }
        dispatc(customActions.setCustomAttributes(data))
        window.localStorage.setItem("customAttributes", JSON.stringify(data))
    }
}