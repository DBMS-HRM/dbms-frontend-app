import React from "react";
import {AppBar, colors, IconButton, Toolbar, Typography, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import jupiter from '../jupiter.svg'
import {useSelector} from "react-redux";
import {selectors} from "../store";
import Avatar from "react-avatar";
import {useHistory} from "react-router";

const employeeAccountTypes = ["Managerial Employee", "Supervisor", "Employee"]
const adminAccountTypes = ["Super Admin", "Admin"]

const UpperNavbar = () => {
    const history = useHistory();
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
        avatarText: {
            fontSize: '12px',
        }
    }));

    const user = useSelector(selectors.user.user)
    let routerRoot;
    if(adminAccountTypes.includes(user.accountType)) {
        routerRoot = "/admin"
    }
    else {
        routerRoot = "/employee"
    }

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
                <IconButton color="inherit" onClick={() => history.push(`${routerRoot}/profile`)}>
                    <Avatar name={user ? user.username : ""} size={40} round={true} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default UpperNavbar;