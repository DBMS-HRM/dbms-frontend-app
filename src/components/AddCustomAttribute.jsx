import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {Button, Grid, IconButton, TextField} from "@material-ui/core";
import CustomTextFields from './CustomTextField';

let count = 1

export default function AddCustomAttribute(props) {

    const [state, setState] = useState({[`${props.name}1`] :''})

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
            [`${props.name}${count}`]: ''
        })
    }

    function removeInput(input) {
        const newState = {...state}
        delete newState[input]
        setState({...newState})
    }

    return (
        <Box>
            <Grid>
            {
                Object.keys(state).map(item => (
                    <Box key={item}>
                        <CustomTextFields></CustomTextFields>
                        <Button                             
                            variant="contained" 
                            >Add
                        </Button>
                        
                        <IconButton onClick={() => removeInput(item)}>
                        <Button 
                            variant="contained"
                            >Delete
                        </Button>
                        </IconButton>
                     </Box>
                ))
            }
            </Grid> 
            <IconButton onClick={addInput}>
            <Button 
                    color="primary"
                    variant="contained"
                    color="primary"
                    >+ Add field</Button>
            </IconButton>
        </Box>
    )
}