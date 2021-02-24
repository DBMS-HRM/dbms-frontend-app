import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';

const country = [
    {
      value: 'sriLanka',
      label: 'Sri Lanka',
    },
    {
      value: 'bangladesh',
      label: 'Bangladesh',
    },
    {
      value: 'pakistan',
      label: 'Pakistan',
    },
    
  ];

  const maritialStatus = [
    {
      value: 'yes',
      label: 'Yes',
    },
    {
      value: 'no',
      label: 'No',
    },
    
  ];

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm() {
    const classes = useStyles();    

    const [ctype, setCountryType] = React.useState('sriLanka');
        const handleChange_countryType = (event) => {
            setCountryType(event.target.value);
    };

    const [mtype, setMaritalStatus] = React.useState('no');
        const handleChange_maritalStatus = (event) => {
            setMaritalStatus(event.target.value);
    };

    return (
        <Container className={classes.container}>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}> 
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    Date of Birth
                    <TextField
                        required         
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"                       
                        fullWidth = {true}                
                    
                    />
                </Grid>
                <Grid item xs={12} sm={6}> 
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="maritalStatus"
                        name="maritalStatus"
                        label="Marital Status"
                        value={mtype}       
                        onChange={handleChange_maritalStatus}                        
                        fullWidth = {true}
                        >
                        {maritialStatus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}> 
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="country"
                        name="country"
                        label="Country"
                        value={ctype}       
                        onChange={handleChange_countryType}                        
                        fullWidth = {true}
                        >
                        {country.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="district"
                        name="district"
                        label="District"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="city"
                        name="city"
                        label="City"
                        fullWidth = {true}
                    />
                </Grid>

                <Grid item xs={12}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="street1"
                        name="street1"
                        label="Street line 1"
                        fullWidth = {true}
                    />
                </Grid>

                <Grid item xs={12}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="street2"
                        name="street2"
                        label="Street line 2"
                        fullWidth = {true}
                    />
                </Grid>               
            </Grid>
        </Container>

    );
}