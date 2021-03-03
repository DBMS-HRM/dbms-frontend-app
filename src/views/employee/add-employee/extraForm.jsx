import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';
import {useSelector} from "react-redux";
import {selectors} from "../../../store";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm(props) {
    const classes = useStyles();
    const [data, setData] = useState({})
    const customColumns = useSelector(selectors.meta.customColumns)
    useEffect(() => {
        Object.keys(customColumns).forEach(item => {
            data[item]= ""
        })
    },[customColumns])

    return (
        <Container className={classes.container}>

            <Grid container spacing={3}>
                {
                    Object.keys(customColumns).map(item =>
                        (
                            <Grid key={item} item xs={12} sm={6}>
                                <TextField
                                    required={true}
                                    error={false}
                                    label={item}
                                    value={data[item]}
                                    onChange={e => setData((previousData) =>{
                                        props.setExtraData(previousData)
                                        return {...previousData, [item]: e.target.value}
                                    })}
                                    fullWidth={true}
                                />
                            </Grid>
                        )
                    )
                }

            </Grid>
        </Container>

    );
}
