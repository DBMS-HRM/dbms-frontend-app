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
import {IconButton} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useHistory} from "react-router";

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


export default function TabView(props) {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
        {name: "jobTitle", label: "Job Title"},
        {name: "payGrade", label: "Pay Grade"},
        {name: "employmentStatus", label: "Employment Status"},
        {name: "requestedDate", label: "Requested Date"},
    ]
    if(props.view === "my") {
        advancedColumns.splice(0,1)
    }

    let advancedColumnsApproved = [...advancedColumns, {name: "approvedDate", label: "Approved Date"}]
    let advancedColumnsRejected = [...advancedColumns, {name: "rejectedDate", label: "Rejected Date"}]
    advancedColumns.push(
        {name: "actions", label: "Actions",
            options: {
                customBodyRender: (value) => {
                    return (
                        <Box>
                            <IconButton onClick={() => history.push(`/employee/approve-leaves${value}`)} >
                                <VisibilityIcon />
                            </IconButton>
                        </Box>
                    );
                }
            }
        })

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {
                    props.view === 'my' ?
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Pending" {...a11yProps(0)} />
                        </Tabs>
                        :
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Pending" {...a11yProps(0)} />
                            <Tab label="Approved" {...a11yProps(1)} />
                            <Tab label="Rejected" {...a11yProps(2)} />
                        </Tabs>
                }
            </AppBar>
            <CustomTabPanel style={{display: "block"}} value={value} index={0}>
                <LeaveTable key={"Pending"} leaveType={"Pending"} advancedColumns={advancedColumns} />
            </CustomTabPanel>
            {props.view === 'my' ? null :
                <React.Fragment>
                    <CustomTabPanel value={value} index={1}>
                        <LeaveTable key={"Approved"} leaveType={"Approved"} advancedColumns={advancedColumnsApproved}/>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <LeaveTable key={"Rejected"} leaveType={"Rejected"} advancedColumns={advancedColumnsRejected} />
                    </CustomTabPanel>
                </React.Fragment>
            }
        </div>
    );
}