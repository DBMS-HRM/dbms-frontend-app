import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Button, IconButton, TextField} from "@material-ui/core";

let count = 1

export default function AddInputField(props) {

    const [state, setState] = useState({})

    useEffect(() => {
        setState(props.value)
    },[props.value])

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        props.setValues(state)
        let customData = []
        // Object.values(state).forEach(item => {customData.push(item)})
        Object.keys(state).forEach(item => customData.push(state[item]))
        props.setCustomValues(customData)
    }


    function addInput() {
        count++
        setState({
            ...state,
            [`${props.name}${count}`]: ''
        })
        props.setValues(state)
    }

    function removeInput(input) {
        const newState = {...state}
        delete newState[input]
        setState({...newState})
        props.setValues(newState)
    }
    return (
        <Box>
            {
                state ?(Object.keys(state).map(item => (
                    <Box key={item} style={{marginBottom: '1rem'}}>
                        <TextField variant={props.variant || "standard"} disabled={props.disabled || false} name={item} value={state[item]} onChange={e => handleChange(e)}/>
                        <IconButton disabled={props.disabled || false} onClick={() => removeInput(item)}>
                            <RemoveCircleIcon/>
                        </IconButton>
                    </Box>
                ))) : null
            }
            <IconButton onClick={addInput} disabled={props.disabled || false} >
                <AddCircleIcon/>
            </IconButton>
        </Box>
    )
}