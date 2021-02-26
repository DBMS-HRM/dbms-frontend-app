import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm() {
    const classes = useStyles();
    
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
                    />
                </Grid>
                         
            </Grid>
        </Container>

    );
}