import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomInputField from "./CustomInput";
import MenuItem from '@material-ui/core/MenuItem';

const type = [
    {
      value: 'integer',
      label: 'integer',
    },
    {
      value: 'string',
      label: 'String',
    },
    {
      value: 'boolean',
      label: 'Boolean',
    },
    {
      value: 'date',
      label: 'Date',
    },
  ]; 

  const defaultValue = [
    {
      value: 'null',
      label: 'null',
    },
    {
      value: 'zero',
      label: '0',
    },
    {
      value: 'custom',
      label: 'custom',
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
return(
<Grid container spacing={5}>
            
                <Grid item xs={12} sm={3}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="columnName"
                        name="columnName"
                        label="Column Name"
                        fullWidth = {true}
                    />
                </Grid>

                <Grid item xs={12} sm={3}> 
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="type"
                        name="type"
                        label="Type"
                        value={atype}       
                        onChange={handleChange_customField}                        
                        fullWidth = {true}
                        >
                        {type.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="defaultValue"
                        name="defaultValue"
                        label="Default Value"
                        fullWidth = {true}
                        value={dtype}       
                        onChange={handleChange_defaultValue}                        
                        fullWidth = {true}
                        >
                        {defaultValue.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>  
                <Grid item xs={12} sm={3}>
                    <TextField
                        required = {false}
                        error = {false}
                        id="customValue"
                        name="customValue"
                        label="Custom Value"
                        fullWidth = {true}
                    />
                </Grid>               
            </Grid>
)}