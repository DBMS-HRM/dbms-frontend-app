import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';
import AddInputField from "../../../components/AddInputField";

const country = [
    {
      value: 'Sri Lanka',
      label: 'Sri Lanka',
    },
    {
      value: 'Bangladesh',
      label: 'Bangladesh',
    },
    {
      value: 'Pakistan',
      label: 'Pakistan',
    },
    
  ];

  const maritialStatus = [
    {
      value: true,
      label: 'Yes',
    },
    {
      value: false,
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

export default function PersonalDetailForm(props) {
    const classes = useStyles();
    const maritalStatusWrapper = React.createRef()
    const countrySelectWrapper = React.createRef()

    // const [ctype, setCountryType] = React.useState('sriLanka');
    //     // props.city = ctype
    //     const handleChange_countryType = (event) => {
    //         // props.setCity(event.target.value)
    //         setCountryType(event.target.value);
    // };
    //
    // const [mtype, setMaritalStatus] = React.useState('no');
    //     // props.maritalStatus = mtype
    //     const handleChange_maritalStatus = (event) => {
    //         // props.setMaritalStatus(event.target.value)
    //         setMaritalStatus(event.target.value);
    // };

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
                        value={props.firstName}
                        handleChange={props.setFirstName}
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
                        value={props.lastName}
                        handleChange={props.setLastName}
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
                        value={props.dateOfBirth}
                        onChange={e=>props.setDateOfBirth(e.target.value)}
                    
                    />
                </Grid>
                <Grid item xs={12} sm={6}> 
                    <TextField
                        select
                        ref={maritalStatusWrapper}
                        required = {true}
                        error = {false}
                        id="maritalStatus"
                        name="maritalStatus"
                        label="Marital Status"
                        value={props.maritalStatus}
                        onChange={e=>props.setMaritalStatus(e.target.value)}
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
                        ref={countrySelectWrapper}
                        required = {true}
                        error = {false}
                        id="country"
                        name="country"
                        label="Country"
                        value={props.country}
                        onChange={e=>props.setCountry(e.target.value)}
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
                        value={props.district}
                        handleChange={props.setDistrict}
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
                        value={props.city}
                        handleChange={props.setCity}
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
                        value={props.street1}
                        handleChange={props.setStreet1}
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
                        value={props.street2}
                        handleChange={props.setStreet2}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Phone Numbers</Typography>
                    <AddInputField name="phoneNumber" value={props.phoneNumbers} setValues={props.setPhoneNumbers} setCustomValues={props.setCustomPhoneNumbers} />
                </Grid>
            </Grid>
        </Container>

    );
}