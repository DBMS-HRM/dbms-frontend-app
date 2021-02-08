import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '48px',
        backgroundImage: "linear-gradient(to right, #043A5A , #159C8D)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: '12px',
        color: '#fff'
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Typography className={classes.text}>
                Copyright @ Jupiter HRMS. All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer;