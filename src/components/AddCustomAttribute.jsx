import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {Button, Grid, IconButton, TextField} from "@material-ui/core";
import CustomTextFields from './CustomTextField';
import {useDispatch, useSelector} from "react-redux";
import api from "../api";
import {toast} from "react-toastify";
import {customTActions} from "../store/custom";
// import {selectCustomAttributes} from "../store/custom";

let count = 1

export default function AddCustomAttribute(props) {
    const initialCustomAttributes = useSelector(state => state.custom.customAttributes)
    let row = {}
    initialCustomAttributes.map((item, index) => row[item.customColumn] = {
        customColumn: item.customColumn,
        dataType: item.dataType,
        defaultValue: item.defaultValue
    })
    const [state, setState] = useState(row)
    const dispatch = useDispatch()

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        props.setValues(state)
    }


    function addInput() {
        count++
        setState({
            ...state,
            [`${props.name}${count}-newlyAdded`]: {
                customColumn: '',
                dataType: '',
                defaultValue: ''
            }
        })
    }

    function removeInput(input) {
        const newState = {...state}
        delete newState[input]
        setState({...newState})
    }

    async function addAttribute(formData) {
        const [res,data] = await api.user.add.newCustomAttribute(formData)
        if(res.status!==200) {
            toast.error(res.message)
            return
        }
        toast.success("Successfully added new attribute!!!")
        dispatch(customTActions.getCustomAttributes())
    }

    async function removeAttribute(customColumn) {
        const [res,data] = await api.user.delete.removeCustomAttribute(customColumn)
        if(res.status!==200) {
            toast.error(res.message)
            return
        }
        toast.success("Successfully added new attribute!!!")
        dispatch(customTActions.getCustomAttributes())
    }

    return (
        <Box>
            <Grid>
            {
                Object.keys(state).map(item => (
                    <Box key={item} mt={3}>
                        <CustomTextFields mainKey={item} data={state[item]} state={state} setData={setState} />
                        <Box display="flex" justifyContent="center" mt={2}>
                            {
                                item.includes('-newlyAdded')
                                ?
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={() => addAttribute(state[item])}
                                        >
                                            Add
                                        </Button>
                                    </Box>
                                :
                                    null
                            }

                            {
                                !item.includes('-newlyAdded')
                                ?
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={() => removeAttribute(item)}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                :
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={() => removeInput(item)}
                                        >
                                            Remove
                                        </Button>
                                    </Box>
                            }
                        </Box>
                     </Box>
                ))
            }
            </Grid>
            <Box mt={5}>
                <Button
                    color="primary"
                    variant="contained"
                    color="primary"
                    onClick={addInput}
                >
                    + Add field
                </Button>
            </Box>
            <Button onClick={() => {console.log(state)}}>Test</Button>
        </Box>
    )
}