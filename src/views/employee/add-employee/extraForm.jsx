import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';
import {useSelector} from "react-redux";


const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm(props) {
    const classes = useStyles();
    const customAttributes = useSelector(state => state.custom.customAttributes)
    const data = {}
    customAttributes.map(item => {
        data[item.customColumn] = ""
    })
    // props.setExtraData(data)
    console.log(props.extraData)
    return (
        <Container className={classes.container}>
            
            <Grid container spacing={3}>
                {
                    customAttributes.map(item => (
                        <Grid key={item.customColumn} item xs={12} sm={6}>
                            <TextField
                                required = {true}
                                error = {false}
                                id={item.customColumn}
                                name={item.customColumn}
                                label={item.customColumn}
                                // value={props.data[item.customColumn]}
                                // onChange={e=>props.setExtraData({...props.extraData, [item.customColumn]: e.target.value})}
                                fullWidth = {true}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>

    );
}