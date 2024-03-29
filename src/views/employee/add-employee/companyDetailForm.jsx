import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';
import api from "../../../api";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


const payGrade = [
    {
        value: 'Level 1',
        label: 'Level 1',
    },
    {
        value: 'Level 2',
        label: 'Level 2',
    },
    {
        value: 'Level 3',
        label: 'Level 3',
    },
    {
        value: 'Level 4',
        label: 'Level 4',
    },
];

const employeementStatus = [
    {
        value: 'Intern Full Time',
        label: 'Intern Full Time',
    },
    {
        value: 'Intern Part Time',
        label: 'Intern Part Time',
    },
    {
        value: 'Contract Full Time',
        label: 'Contract Full Time',
    },
    {
        value: 'Contract Part Time',
        label: 'Contract Part Time',
    },
    {
        value: 'Permanent',
        label: 'Permanent',
    },
    {
        value: 'Freelance',
        label: 'Freelance',
    },
];

const department = [
    {
        value: 'Financial',
        label: 'Financial',
        jobTitles: [{
            value: 'Accountant',
            label: 'Accountant',
        }]
    },
    {
        value: 'ICT',
        label: 'ICT',
        jobTitles: [{
            value: 'Software Engineer',
            label: 'Software Engineer',
        }]
    },
    {
        value: 'Security',
        label: 'Security',
        jobTitles: [{
            value: 'Security Officer',
            label: 'Security Officer',
        }]
    },
    {
        value: 'Quality Assurance',
        label: 'Quality Assurance',
        jobTitles: [{
            value: 'QA Engineer',
            label: 'QA Engineer',
        }]
    },
];

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm(props) {
    const classes = useStyles();
    const [ptype, setPayGradeType] = React.useState('level1');
    const handleChange_payGrade = (event) => {
        setPayGradeType(event.target.value);
    };


    const [supervisors, setSupervisors] = useState({})

    useEffect(() => {
        async function getData() {
            const [res,data] = await api.user.get.potentialSupervisors()
            if(res.status === 200) {
                let customSupervisors = {}
                data.map(item => {
                    customSupervisors[item.employeeId] = {
                        firstName: item.firstName,
                        lastName: item.lastName,
                        jobTitle: item.jobTitle,
                        payGrade: item.payGrade,
                        subordinateCount: item.subordinateCount
                    }
                })
                setSupervisors(customSupervisors)
            }
        }
        getData()
    },[])

    if(props.type === "view") {
        department.push({
            value: 'HR',
            label: 'HR',
            jobTitles: [{
                value: 'HR Manager',
                label: 'HR Manager',
            }]
        })
    }

    const [jtype, setJobTitleType] = React.useState('HRManager');
    const handleChange_jobTitle = (event) => {
        setJobTitleType(event.target.value);
    };

    const [stype, setEmployeementStatusType] = React.useState('internFullTime');
    const handleChange_employeementStatus = (event) => {
        setEmployeementStatusType(event.target.value);
    };

    const [dtype, setDepartmentType] = React.useState('Financial');
    const handleChange_department = (event) => {
        setDepartmentType(event.target.value);
    };

    let jobTitle = [];
    department.forEach(item => {
        if (item.value === props.departmentName) {
            jobTitle = item.jobTitles
        }
    })
    console.log(jobTitle)

    return (
        <Container className={classes.container}>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required={false}
                        error={false}
                        id="branchName"
                        name="branchName"
                        label="Branch name"
                        fullWidth={true}
                        value={props.branchName}
                        handleChange={props.setBranchName}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required={true}
                        error={false}
                        id="department"
                        name="department"
                        label="Department"
                        value={props.departmentName}
                        onChange={e => props.setDepartmentName(e.target.value)}
                        fullWidth={true}
                    >
                        {department.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required={true}
                        error={false}
                        id="jobTitle"
                        name="jobTitle"
                        label="job Title"
                        value={props.jobTitle}
                        onChange={e => props.setJobTitle(e.target.value)}
                        fullWidth={true}
                    >
                        {jobTitle.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required={true}
                        error={false}
                        id="payGrade"
                        name="payGrade"
                        label="Pay Grade"
                        value={props.payGrade}
                        onChange={e => props.setPayGrade(e.target.value)}
                        fullWidth={true}
                    >
                        {payGrade.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required={true}
                        error={false}
                        id="employeementStatus"
                        name="employeementStatus"
                        label="Employeement Status"
                        value={props.employmentStatus}
                        onChange={e => props.setEmploymentStatus(e.target.value)}
                        fullWidth={true}
                    >
                        {employeementStatus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Box mb={4}>
                            <Typography variant="h6">
                                Set Supervisor to Employee
                            </Typography>
                        </Box>
                        <Box>

                            <TextField
                                select
                                required={true}
                                error={false}
                                name="potentialSupervisors"
                                label="Potential Supervisors"
                                fullWidth={true}
                                value={props.supervisor}
                                onChange={e => props.setSupervisor(e.target.value)}
                            >
                                {
                                    Object.keys(supervisors).map(item => (
                                        <MenuItem key={item} value={item}>
                                            {`${supervisors[item].firstName} ${supervisors[item].lastName}`}
                                        </MenuItem>
                                    ))
                                }
                                <div>

                                </div>
                            </TextField>
                            {
                                supervisors[props.supervisor] ?
                                    <Box>
                                        <Box mt={3}>
                                            <Typography>Job Title</Typography>
                                            <TextField value={supervisors[props.supervisor].jobTitle} disabled />
                                        </Box>
                                        <Box mt={3}>
                                            <Typography>Pay Grade</Typography>
                                            <TextField value={supervisors[props.supervisor].payGrade} disabled />
                                        </Box>
                                        <Box mt={3}>
                                            <Typography>Subordinate Count</Typography>
                                            <TextField value={supervisors[props.supervisor].subordinateCount} disabled />
                                        </Box>
                                    </Box> : null
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
}