import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LeaveTable from "./LeaveTable";
import api from "../../../api";
import {toast} from "react-toastify";
import Avatar from "react-avatar";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function CustomTabPanel(props) {
    const {children, value, index} = props
    return (
        <Box>
            {value === index && (
                children
            )}
        </Box>
    );
}

let advancedColumns = [
    {name: "name", label: "Name",
        options: {
            customBodyRender: (value) => {
                return (
                    <Box>
                        <Avatar  name={value} round={true} size={36} />
                        <span style={{marginLeft: "1rem", fontWeight: "500", color: "#323C47"}}>{value}</span>
                    </Box>
                );
            }
        }
    },
    {name: "department", label: "Department"},
    {name: "jobTitle", label: "Job Title"},
    {name: "payGrade", label: "Pay Grade"},
    {name: "employmentStatus", label: "Employment Status"},
    {name: "requestedDate", label: "Requested Date"},
]

export default function TabView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let advancedColumnsApproved = [...advancedColumns, {name: "approvedDate", label: "Approved Date"}]
    let advancedColumnsRejected = [...advancedColumns, {name: "rejectedDate", label: "Rejected Date"}]

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Pending" {...a11yProps(0)} />
                    <Tab label="Approved" {...a11yProps(1)} />
                    <Tab label="Rejected" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <CustomTabPanel style={{display: "block"}} value={value} index={0}>
                <LeaveTable key={"Pending"} leaveType={"Pending"} advancedColumns={advancedColumns} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <LeaveTable key={"Approved"} leaveType={"Approved"} advancedColumns={advancedColumnsApproved} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <LeaveTable key={"Rejected"} leaveType={"Rejected"} advancedColumns={advancedColumnsRejected} />
            </CustomTabPanel>
        </div>
    );
}