import React from "react";
import {Redirect, useRouteMatch} from "react-router";
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard";
import SignIn from "./sign-in";
import Profile from "./profile";
import AddLeave from "./add-leave";
import Layout from "../../layout";
import AddEmployee from "./add-employee"
import EmployeeDetails from "./employee-details";
import ShowLeaves from "./show-leaves";
import ApproveLeave from "./approve-leaves";
import ShowMyLeaves from "./show-leaves/my";
import LeaveConfig from "./leave-config";
import {employeeAccountTypes} from "../../helpers/variables";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../../store/user";
import ViewEmployee from "./edit-employee-details";
import CustomFields from "../admin/custom-employee-attributes";

export default function Employee() {
    let {path} = useRouteMatch();
    const token = window.localStorage.getItem("accessToken")
    const user = JSON.parse(window.localStorage.getItem("userData"))
    console.log(user)
    return (
        <Switch>
            <Route path={`${path}/sign-in`} component={SignIn} />
            {
                token && employeeAccountTypes.includes(user.accountType) ?
                    <Layout>
                        <Route path={`${path}/profile`} component={Profile} />
                        <Route path={`${path}/add-leave`} component={AddLeave} />
                        <Route path={`${path}/show-my-leaves`} component={ShowMyLeaves} />
                        <Route path={`${path}/add-employee`} component={AddEmployee} />
                        <Route path={`${path}/view-employee/:employeeId`} component={ViewEmployee} />
                        <Route path={`${path}/details`} component={EmployeeDetails} />
                        <Route path={`${path}/show-leaves-requested`} component={ShowMyLeaves} />
                        <Route path={`${path}/show-leaves`} component={ShowLeaves} /> 
                        <Route path={`${path}/leave-config`} component={LeaveConfig} />                        
                        <Route path={`${path}/approve-leaves/:leaveId/:employeeId`} component={ApproveLeave} />

                        {/*{*/}
                        {/*    user.accountType === "Managerial Employee"*/}
                        {/*    ?*/}

                        {/*    <React.Fragment>*/}
                        {/*        {*/}
                        {/*            user.departmentName === "HR"*/}
                        {/*            ?*/}
                        {/*                <React.Fragment>*/}
                        {/*                    <Route path={`${path}/add-employee`} component={AddEmployee} />*/}
                        {/*                    <Route path={`${path}/view-employee/:employeeId`} component={ViewEmployee} />*/}
                        {/*                </React.Fragment>*/}
                        {/*            :*/}
                        {/*                <Redirect to={'/employee'} />*/}
                        {/*        }*/}
                        {/*        <Route path={`${path}/details`} component={EmployeeDetails} />*/}
                        {/*    </React.Fragment>*/}
                        {/*    :*/}
                        {/*        <Redirect to={'/employee'} />*/}
                        {/*}*/}

                        {/*{*/}
                        {/*    user.supervisor*/}
                        {/*    ?*/}
                        {/*       <React.Fragment>*/}
                        {/*           <Route path={`${path}/show-leaves`} component={ShowLeaves} />*/}
                        {/*           <Route path={`${path}/approve-leaves/:leaveId/:employeeId`} component={ApproveLeave} />*/}
                        {/*       </React.Fragment>*/}
                        {/*    :*/}
                        {/*        <Redirect to={'/employee'} />*/}
                        {/*}*/}

                        <Route exact path={`${path}`} component={Index} />
                    </Layout>
                    :
                    <Redirect to={`${path}/sign-in`} />
            }
        </Switch>
    )
}
