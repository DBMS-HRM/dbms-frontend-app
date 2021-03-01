import React from "react";
import TextField from '@material-ui/core/TextField';


const CustomInputField = (props) => {
    return(
        <TextField
            required = {props.required}
            error = {props.error}
            id= {props.id}
            name= {props.name}
            label= {props.label}
            fullWidth={props.fullWidth}
            autoComplete={props.autoComplete}
            helperText= {props.helperText}
            value={props.value}
            onChange={e => props.handleChange(e.target.value)}
        />
    );
}

export default CustomInputField;

