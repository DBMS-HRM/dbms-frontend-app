import React from "react";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import {selectUser} from "../store/user";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const SideNavbar = () => {
    const history = useHistory();
    const accountType = useSelector(state => state.user.user.accountType)


    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
            style={{backgroundColor: '#00617E', zIndex: '50', position: 'fixed', left: 0, top: 0}}
        >
            <Toggle />
            <Nav defaultSelected="home">
                <NavItem eventKey="home" onClick={() => history.push(`/${accountType}/dashboard`)} >
                    <NavIcon style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <DashboardIcon />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="profile" onClick={() => history.push(`/${accountType}/profile`)} >
                    <Link to="/employee/profile" />
                        <NavIcon style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <NoteAddIcon />
                        </NavIcon>
                        <NavText>
                            Profile
                        </NavText>
                </NavItem>
            </Nav>
        </SideNav>
    )
}

export default SideNavbar;