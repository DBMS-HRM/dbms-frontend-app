import React from "react";
import {AppBar, Avatar, colors, IconButton, Toolbar, Typography, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import jupiter from '../jupiter.svg'
import {useSelector} from "react-redux";
import {selectUser} from "../store/user";


const UpperNavbar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        appBar: {
            marginLeft: '64px',
            width: 'calc(100% - 64px)',
            position: 'fixed',
            top: 0,
            left: 0
        },
        brandIcon: {
            marginRight: '16px'
        },
        title: {
            fontFamily: "'Rationale', sans-serif",
            flexGrow: 1
        },
        avatar: {
            width: '24px',
            height: '24px',
            backgroundColor: colors.red["200"]
        },
        avatarText: {
            fontSize: '12px',
        }
    }));

    const user = useSelector(selectUser)

    const classes = useStyles();
    return (
        <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar>
                <Box className={classes.brandIcon}>
                    <img src={jupiter} alt="jupiter-img"/>
                </Box>
                <Typography variant="h6" className={classes.title}>
                    Jupiter HRMS
                </Typography>
                <IconButton color="inherit">
                    <AddAlertIcon/>
                </IconButton>
                <IconButton color="inherit">
                    <Avatar className={classes.avatar}>
                        <Typography className={classes.avatarText}>{user.email[0]}</Typography>
                    </Avatar>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default UpperNavbar;