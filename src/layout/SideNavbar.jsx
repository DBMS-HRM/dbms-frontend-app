import React from "react";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideNavbar = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
            style={{backgroundColor: '#00617E', zIndex: '50', position: 'fixed', left: 0, top: 0}}
        >
            <Toggle />
            <Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <DashboardIcon />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <NoteAddIcon />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                </NavItem>
            </Nav>
        </SideNav>
    )
}

export default SideNavbar;