import React from "react";

import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';

import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';

import {selectUser} from "../../store/user";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import Drawer from "./drawer";
import MiniDrawer from "./drawer";
import {useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const SideNavbar = () => {

    const myTheme = useTheme();

    const routes = {
        admin: {
            normal: {
                home: {
                    route: "/admin",
                    text: "Home",
                    icon: <DashboardIcon style={{color: myTheme.palette.primary.contrastText}} />
                },
                addEmployee: {
                    route: "/admin/add-employee",
                    text: "Add Employee",
                    icon: <GroupAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                editAbsenceRelatedFunc: {
                    route: "/employee/edit-absence-related-functionalities",
                    text: "Edit Absence Related Functionalities",
                    icon: <LibraryAddCheckIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
            },
            super: {
                addAdmin: {
                    route: "/admin/add-admin",
                    text: "Add Admin",
                    icon: <PersonAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
            }
        },
        employee: {
            normal: {
                home: {
                    route: "/employee",
                    text: "Home",
                    icon: <DashboardIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                addLeave: {
                    route: "/employee/add-leave",
                    text: "Add Leave",
                    icon: <PostAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
            },
            managerial: {
                addEmployee: {
                    route: "/employee/add-employee",
                    text: "Add Employee",
                    icon: <GroupAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                customEmployeeAttributes: {
                    route: "/employee/edit-custom-employee-attributes",
                    text: "Edit Custom Employee Attributes",
                    icon: <LibraryAddCheckIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                employeeDetails: {
                    route: "/employee/details",
                    text: "Employee Details",
                    icon: <GroupIcon style={{color: myTheme.palette.primary.contrastText}}/>
                }
            },
            supervisor: {
                showLeaves: {
                    route: "/employee/show-leaves",
                    text: "Show Leaves",
                    icon: <ListAltIcon style={{color: myTheme.palette.primary.contrastText}}/>
                }
            },
        },

    }

    const employeeAccountTypes = {"Managerial Employee": routes.employee.managerial, "Supervisor":routes.employee.supervisor, "Employee":routes.employee.normal}
    const adminAccountTypes = {"Super Admin": routes.admin.super, "Admin": routes.admin.normal}

    const accountType = useSelector(selectUser).accountType
    console.log(accountType)
    let route;
    let routeMap;
    let routeList;
    if(Object.keys(adminAccountTypes).includes(accountType)) {
        routeMap = adminAccountTypes
        route = routes.admin.normal
    }
    else {
        routeMap = employeeAccountTypes
        route = routes.employee.normal
    }
    routeList = {...route,...routeMap[accountType]}
    console.log(route, routeMap)

    return (
        // <SideNav
        //     onSelect={(selected) => {
        //         // Add your code here
        //     }}
        //     style={{backgroundColor: '#00617E', zIndex: '50', position: 'fixed', left: 0, top: 0}}
        // >
        //     <Toggle/>
        //     <Nav defaultSelected="Home" style={{marginTop: "3rem"}}>
        //         {Object.keys(routeList).map(navItem => (
        //             <NavItem eventKey={routeList[navItem].text} onClick={() => history.push(routeList[navItem].route)}  key={routeList[navItem].text}>
        //                 <NavIcon style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        //                     {routeList[navItem].icon}
        //                 </NavIcon>
        //                 <NavText>
        //                     <div style={{marginRight: '8px'}}>
        //                         {routeList[navItem].text}
        //                     </div>
        //                 </NavText>
        //             </NavItem>
        //             )
        //         )
        //         }
        //     </Nav>
        // </SideNav>
        <div>
            <MiniDrawer routeList={routeList} />
        </div>
    )
}

export default SideNavbar;