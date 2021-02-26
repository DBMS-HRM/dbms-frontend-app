import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../../components/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';


const payGrade = [
    {
      value: 'level1',
      label: 'Level 1',
    },
    {
      value: 'level2',
      label: 'Level2',
    },
    {
      value: 'level3',
      label: 'Level 3',
    },
    {
      value: 'level4',
      label: 'Level 4',
    },
  ];

  const jobTitle = [
    {
      value: 'HRManager',
      label: 'HR Manager',
    },
    {
      value: 'QAEngineer',
      label: 'QA Engineer',
    },
    {
      value: 'accountant',
      label: 'Accountant',
    },
    {
      value: 'softwareEngineer',
      label: 'Software Engineer',
    },
  ];

  const employeementStatus = [
    {
      value: 'internFullTime',
      label: 'Intern Full Time',
    },
    {
      value: 'internPartTime',
      label: 'Intern Part Time',
    },
    {
      value: 'contractFullTime',
      label: 'Contract Full Time',
    },
    {
      value: 'contractPartTime',
      label: 'Contract Part Time',
    },
    {
        value: 'permanent',
        label: 'Permanent',
    },
    {
        value: 'freelance',
        label: 'Freelance',
    },
  ];

  const department = [
    {
      value: 'hr',
      label: 'HR',
    },
    {
      value: 'financial',
      label: 'Financial',
    },
    {
      value: 'ict',
      label: 'ICT',
    },
    {
      value: 'security',
      label: 'Security',
    },
    {
       value: 'qualityAssuarance',
       label: 'Quality Assuarance',
    },
  ];

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm() {
    const classes = useStyles();
    const [ptype, setPayGradeType] = React.useState('level1');
    const handleChange_payGrade = (event) => {
        setPayGradeType(event.target.value);
    };

    const [jtype, setJobTitleType] = React.useState('HRManager');
        const handleChange_jobTitle = (event) => {
            setJobTitleType(event.target.value);
    };

    const [stype, setEmployeementStatusType] = React.useState('internFullTime');
        const handleChange_employeementStatus = (event) => {
            setEmployeementStatusType(event.target.value);
    };

    const [dtype, setDepartmentType] = React.useState('hr');
        const handleChange_department = (event) => {
            setDepartmentType(event.target.value);
    };
    
    return (
        <Container className={classes.container}>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="branchName"
                        name="branchName"
                        label="Branch name"
                        fullWidth = {true}
                    />
                </Grid>

                <Grid item xs={12} sm={6}> 
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="jobTitle"
                        name="jobTitle"
                        label="job Title"
                        value={jtype}       
                        onChange={handleChange_jobTitle}                        
                        fullWidth = {true}
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
                        required = {true}
                        error = {false}
                        id="payGrade"
                        name="payGrade"
                        label="Pay Grade"
                        value={ptype}       
                        onChange={handleChange_payGrade}                        
                        fullWidth = {true}
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
                        required = {true}
                        error = {false}
                        id="employeementStatus"
                        name="employeementStatus"
                        label="Employeement Status"
                        value={stype}       
                        onChange={handleChange_employeementStatus}                        
                        fullWidth = {true}
                        >
                        {employeementStatus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        required = {true}
                        error = {false}
                        id="department"
                        name="department"
                        label="Department"
                        value={dtype}       
                        onChange={handleChange_department}                        
                        fullWidth = {true}
                        >
                        {department.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>         
            </Grid>
        </Container>

    );
}