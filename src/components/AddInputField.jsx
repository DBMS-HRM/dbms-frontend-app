import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Button, IconButton, TextField} from "@material-ui/core";

let count = 1

export default function AddInputField(props) {

    const [state, setState] = useState(props.value)

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        props.setValues(state)
        let customData = []
        Object.values(state).forEach(item => {customData.push(item)})
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
                Object.keys(state).map(item => (
                    <Box key={item}>
                        <TextField name={item} value={state[item]} onChange={e => handleChange(e)}/>
                        <IconButton onClick={() => removeInput(item)}>
                            <RemoveCircleIcon/>
                        </IconButton>
                    </Box>
                ))
            }
            <IconButton onClick={addInput}>
                <AddCircleIcon/>
            </IconButton>
        </Box>
    )
}