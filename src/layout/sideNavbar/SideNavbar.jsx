import React from "react";

import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import ReceiptIcon from '@material-ui/icons/Receipt';

import {selectors} from "../../store";
import {useSelector} from "react-redux";
import MiniDrawer from "./drawer";
import {useTheme} from "@material-ui/core/styles";

const SideNavbar = () => {

    const myTheme = useTheme();

    const routes = {
        admin: {
            normal: {
                home: {
                    route: "/admin",
                    text: "Home",
                    icon: <DashboardIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                editAbsenceRelatedFunc: {
                    route: "/admin/custom-fields",
                    text: "Edit Absence Related Functionalities",
                    icon: <LibraryAddCheckIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                addEmployee: {
                    route: "/admin/add-employee",
                    text: "Add Employee",
                    icon: <GroupAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
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
                myLeaves: {
                    route: "/employee/show-my-leaves",
                    text: "My Leaves",
                    icon: <SubjectIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                addLeave: {
                    route: "/employee/add-leave",
                    text: "Add Leave",
                    icon: <PostAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
            },
            managerial: {
                normal: {
                    employeeDetails: {
                        route: "/employee/details",
                        text: "Employee Details",
                        icon: <GroupIcon style={{color: myTheme.palette.primary.contrastText}}/>
                    },
                    orderByReport: {
                        route: "/reports/order-by",
                        text: "Order By Report",
                        icon: <ReceiptIcon style={{color: myTheme.palette.primary.contrastText}} />
                    },
                    leaveReport: {
                        route: "/reports/total-leaves-by-department",
                        text: "Leave Report",
                        icon: <ReceiptIcon style={{color: myTheme.palette.primary.contrastText}} />
                    }
                },
                "HR": {
                    addEmployee: {
                        route: "/employee/add-employee",
                        text: "Add Employee",
                        icon: <GroupAddIcon style={{color: myTheme.palette.primary.contrastText}}/>
                    },
                },
            },
            supervisor: {
                showLeaves: {
                    route: "/employee/show-leaves",
                    text: "Subordinates Leaves",
                    icon: <ListAltIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },
                showSubordinates: {
                    route: "/employee/subordinate-details",
                    text: "Subordinates",
                    icon: <GroupIcon style={{color: myTheme.palette.primary.contrastText}}/>
                },

            },
        },

    }

    const employeeAccountTypes = {
        "Managerial Employee": routes.employee.managerial.normal,
        "Supervisor": routes.employee.supervisor,
        "Employee": routes.employee.normal
    }
    const adminAccountTypes = {"Super Admin": routes.admin.super, "Admin": routes.admin.normal}
    const user = useSelector(selectors.user.user)
    const departmentWiseAdditional = {
        "HR": routes.employee.managerial.HR
    }
    const accountType = user.accountType
    let route
    let routeMap
    let supervisorRoutes = {}
    let departmentWiseAdditionalRoutes = {}
    let routeList;
    if (Object.keys(adminAccountTypes).includes(accountType)) {
        routeMap = adminAccountTypes
        route = routes.admin.normal
    } else {
        routeMap = employeeAccountTypes
        route = routes.employee.normal
    }
    if (user.supervisor) {
        supervisorRoutes = employeeAccountTypes["Supervisor"]
    }
    if (user.departmentName === "HR") {
        departmentWiseAdditionalRoutes = departmentWiseAdditional["HR"]
    }
    routeList = {...route, ...routeMap[accountType], ...supervisorRoutes, ...departmentWiseAdditionalRoutes}

    return (
        <div>
            <MiniDrawer routeList={routeList}/>
        </div>
    )
}

export default SideNavbar;