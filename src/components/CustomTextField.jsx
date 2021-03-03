import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomInputField from "./CustomInput";
import MenuItem from '@material-ui/core/MenuItem';

const type = [
    {
      value: 'TEXT',
      label: 'TEXT',
    },
    {
      value: 'NUMBER',
      label: 'NUMBER',
    },
  ]; 

export default function CustomTextFields(props) {

    const [atype, setColumnType] = React.useState('integer');
    const handleChange_customField = (event) => {
        setColumnType(event.target.value);
    };

    const [dtype, setdefaultValue] = React.useState('null');
    const handleChange_defaultValue = (event) => {
      setdefaultValue(event.target.value);
    };

    const [data, setData] = useState({
        customColumn: props.data.customColumn || '',
        dataType: props.data.dataType || '',
        defaultValue: props.data.defaultValue || ''
    })
return(
<Grid container spacing={5}>
            
                <Grid item xs={12} sm={4}>
                    <TextField
                        required = {true}
                        error = {false}
                        id="columnName"
                        name="columnName"
                        label="Column Name"
                        fullWidth = {true}
                        value={props.data.customColumn}
                        onChange={e=>props.setData({...props.state, [props.mainKey]: {...props.data,customColumn: e.target.value}})}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="type"
                        name="type"
                        label="Type"
                        value={props.data.dataType}
                        onChange={e=>props.setData({...props.state, [props.mainKey]: {...props.data,dataType: e.target.value}})}
                        fullWidth = {true}
                        >
                        {type.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        required = {true}
                        error = {false}
                        id="defaultValue"
                        name="defaultValue"
                        label="Default Value"
                        fullWidth = {true}
                        value={props.data.defaultValue}
                        onChange={e=>props.setData({...props.state, [props.mainKey]: {...props.data,defaultValue: e.target.value}})}
                        />
                </Grid>
            </Grid>
)}