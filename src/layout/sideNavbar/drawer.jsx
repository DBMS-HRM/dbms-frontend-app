import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useHistory, useLocation, useRouteMatch} from "react-router";
import {MenuList} from "@material-ui/core";

const drawerWidth = 340;

export default function MiniDrawer(props) {

    const myTheme = useTheme()
    const path = useLocation()

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        menuButton: {
            marginRight: 0,
        },
        hide: {
            display: 'none',
        },
        paper: {

        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            backgroundColor: myTheme.palette.primary.main
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));


    const history = useHistory()
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                elevation={0}
                classes={{
                    paper: clsx(classes.drawer,{
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    {open ? <IconButton onClick={handleDrawerClose}
                                        style={{color: myTheme.palette.primary.contrastText}}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton> :
                        <IconButton
                            style={{color: myTheme.palette.primary.contrastText}}
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                </div>
                <Divider />
                <MenuList>
                    {Object.keys(props.routeList).map(navItem => (
                        <ListItem selected={path.pathname === props.routeList[navItem].route} button key={props.routeList[navItem].text} onClick={() => history.push(props.routeList[navItem].route)}  >
                            <ListItemIcon>{props.routeList[navItem].icon}</ListItemIcon>
                            {/*<div style={{color: myTheme.palette.primary.contrastText, maxWidth: "100%"}}>{props.routeList[navItem].text}*/}
                            <ListItemText style={{color: myTheme.palette.primary.contrastText}} primary={props.routeList[navItem].text} />
                            {/*</div>*/}
                        </ListItem>
                    ))}
                </MenuList>
            </Drawer>
        </div>
    );
}