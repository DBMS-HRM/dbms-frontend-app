import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import AddCustomAttribute from "../../../components/AddCustomAttribute";
import {useDispatch} from 'react-redux'
import api from "../../../api"

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    state : {
        showInput: false,
        addTaskInput: ''
    },
    paper : {
        width: '70%',
        align: 'center',
        padding: '2%'
    }
});

export default function AddCustomField(props) {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    // const [attributes, setLo]

    useEffect(() => {
        setLoading(true);

        (async function () {
            const [res, data] = await api.user.get.customEmployeeAttributes()
        })();


        setLoading(false)
    }, [])
    
    return (
        <Container className={classes.container} align={'center'} >
            <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Custom Fields
                    </Typography>
                <Box mt={5} />
                                              
            <Grid container spacing={5}>
            <Grid item xs={12}>
                    <AddCustomAttribute name="customAttribute" value={props.customAttribute} setValues={props.setCustomAttribute} />
                </Grid>
            </Grid>
           </Paper> 
        </Container>

    );
}