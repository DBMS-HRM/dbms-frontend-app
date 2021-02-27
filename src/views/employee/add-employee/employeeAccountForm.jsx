import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';


const accountType = [
    {
      value: 'Managerial Employee',
      label: 'Managerial Employee',
    },
    {
      value: 'Supervisor',
      label: 'Supervisor',
    },
    {
      value: 'Employee',
      label: 'Employee',
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
    
    const [atype, setAccountType] = React.useState('managerialEmployee');
        const handleChange_accountType = (event) => {
            setAccountType(event.target.value);
    };

    return (
        <Container className={classes.container}>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="username"
                        name="username"
                        label="Username"
                        fullWidth = {true}
                        value={props.username}
                        handleChange={props.setUsername}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required = {true}
                        error = {false}
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth = {true}
                        value={props.password}
                        onChange={e=>props.setPassword(e.target.value)}
                    />
                </Grid>
               
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {true}
                        error = {false}
                        id="emailAddress"
                        name="emailAddress"
                        label="Email Address"
                        fullWidth = {true}
                        value={props.email}
                        handleChange={props.setEmail}
                    />
                </Grid>
                

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="accountType"
                        name="accountType"
                        label="Account Type"
                        fullWidth = {true}
                        value={props.accountType}
                        onChange={e=>props.setAccountType(e.target.value)}
                        >
                        {accountType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>               
            </Grid>
        </Container>

    );
}