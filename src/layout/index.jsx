import React from "react";
import UpperNavbar from "../layout/UpperNavbar";
import SideNavbar from "../layout/SideNavbar";
import {Box} from "@material-ui/core";
import Footer from "../layout/Footer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    layout: {
        // marginTop: '64px'
        margin: '64px 0 64px 64px',
    }
}))

const Layout = (props) => {
    const classes = useStyles()
    return (
        <main>
            <SideNavbar/>
            <UpperNavbar/>
            <Box className={classes.layout}>
                {props.children}
            </Box>
            <Footer/>
        </main>
    )
}

export default Layout;