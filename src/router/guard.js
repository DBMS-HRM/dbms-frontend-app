import {selectors} from "../store"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";


export function useRouteGuard(condition, {whenFalse, whenTrue}) {
    const accountType = useSelector(selectors.user.accountType)
    const isSupervisor = useSelector(selectors.user.isSupervisor)
    const haveSupervisor = useSelector(selectors.user.haveSupervisor)
    const [state, setState] = useState(false)
    const history = useHistory()
    useEffect(() => {
        setState(condition(accountType, isSupervisor, haveSupervisor))
        if (state) {
            if (whenTrue) history.push(whenTrue)
        } else {
            if (whenFalse) history.push(whenFalse)
        }
    })

    return state;
}