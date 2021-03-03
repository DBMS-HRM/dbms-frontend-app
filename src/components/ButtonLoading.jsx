import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function ButtonLoading(props) {
    const classes = useStyles();

    return (
        <Button fullWidth variant={props.variant} sx={props.sidenav}
                className={props.className} onClick={props.onClick}>
            {
                props.loading ?
                    <div className={classes.root}>
                        <CircularProgress />
                    </div> :
                    <Typography>
                        {props.name || 'Log in' }
                    </Typography>
            }
        </Button>
    );
}