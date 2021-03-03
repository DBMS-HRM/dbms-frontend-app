import React from "react";
import {AppBar, colors, IconButton, Toolbar, Typography, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import jupiter from '../jupiter.svg'
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "../store";
import Avatar from "react-avatar";
import {useHistory} from "react-router";
import Button from "@material-ui/core/Button";
import {adminAccountTypes} from "../helpers/variables";
import theme from "../theme/Theme";
import {userActions} from "../store/user";

const UpperNavbar = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    // const user = useSelector(selectUser)
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
    function signOut() {
        dispatch(userActions.setToken(''))
        dispatch(userActions.setUserData(''))
        window.localStorage.removeItem('accessToken')
        window.localStorage.removeItem('userData')
        if(adminAccountTypes.includes(user.accountType)) {
            history.push('/admin/sign-in')
        }
        else {
            history.push('/employee/sign-in')
        }
    }
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
                <Box display='flex' justifyContent='space-between' width="100%">
                    <Box display='flex' alignContent='center'>
                        <Button style={{textTransform: 'none'}} onClick={() => history.push('/')}>
                            <Box className={classes.brandIcon}>
                                <img src={jupiter} alt="jupiter-img"/>
                            </Box>
                            <Typography variant="h6" className={classes.title} style={{color: 'white'}}>
                                Jupiter HRMS
                            </Typography>
                        </Button>
                    </Box>
                    <Box>
                        <IconButton color="inherit">
                            <AddAlertIcon/>
                        </IconButton>
                        <IconButton color="inherit" onClick={() => history.push(`${routerRoot}/profile`)}>
                            <Avatar name={user ? user.username : ""} size={40} round={true} />
                        </IconButton>
                        <Button style={{backgroundColor: 'white'}} onClick={signOut}>
                            <Typography style={{textTransform: 'none', color: theme.palette.primary.main}}>
                                Log out
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default UpperNavbar;