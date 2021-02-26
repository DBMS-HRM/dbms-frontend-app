import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link }  from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalDetailForm from './personalDetailForm';
import CompanyDetailForm from './companyDetailForm';
import EmployeeAccountForm from './employeeAccountForm';
import ExtraForm from './extraForm';
import {Container} from "@material-ui/core";
import user from "../../../api/modules/user";
import ButtonLoading from "../../../components/ButtonLoading";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({

    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    container: {
        marginTop: "5rem"
    },
}));

const steps = ['Personal', 'Company', 'Employee Account', 'Extra'];

let formData;
let loading;

export default function AddEmployee() {
    const fullDate = new Date()
    const date = fullDate.getMonth()+1
    const today = `${fullDate.getFullYear()}-${date.toString().length === 1 ? "0"+date : date}-${fullDate.getDate()}`

    const dispatch = useDispatch()

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [maritalStatus, setMaritalStatus] = useState(false)
    const [country, setCountry] = useState('sriLanka')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [street1, setStreet1] = useState('')
    const [street2, setStreet2] = useState('')
    const [branchName, setBranchName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [payGrade, setPayGrade] = useState('')
    const [employmentStatus, setEmploymentStatus] = useState('')
    const [departmentName, setDepartmentName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [accountType, setAccountType] = useState('')

    const formData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        maritalStatus: maritalStatus,
        country: country,
        phoneNumber: phoneNumber,
        district: district,
        city: city,
        street1: street1,
        street2: street2,
        branchName: branchName,
        jobTitle: jobTitle,
        payGrade: payGrade,
        employmentStatus: employmentStatus,
        departmentName: departmentName,
        username: username,
        password: password,
        email: email,
        accountType: accountType,
    }

    async function submitForm() {
        loading = true
        const res = dispatch(userTActions.addEmployee(formData))
        loading = false
        if(res.status === 200) {
            toast.success("Successfully added an employee !!!")
            return
        }
        toast.error(res.message)
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalDetailForm firstName={firstName} setFirstName={setFirstName}
                                           lastName={lastName} setLastName={setLastName}
                                           dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}
                                           maritalStatus={maritalStatus} setMaritalStatus={setMaritalStatus}
                                           country={country} setCountry={setCountry}
                                           district={district} setDistrict={setDistrict}
                                           city={city} setCity={setCity}
                                           street1={street1} setStreet1={setStreet1}
                                           street2={street2} setStreet2={setStreet2}
                />;
            case 1:
                return <CompanyDetailForm branchName={branchName} setBranchName={setBranchName}
                                          jobTitle={jobTitle} setJobTitle={setJobTitle}
                                          payGrade={payGrade} setPayGrade={setPayGrade}
                                          employmentStatus={employmentStatus} setEmploymentStatus={setEmploymentStatus}
                                          departmentName={departmentName} setDepartmentName={setDepartmentName}

                />;
            case 2:
                return <EmployeeAccountForm username={username} setUsername={setUsername}
                                            password={password} setPassword={setPassword}
                                            email={email} setEmail={setEmail}
                                            accountType={accountType} setAccountType={setAccountType}
                />;
            case 3:
                return <ExtraForm />;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container className={classes.container}>
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Add Employee
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Employee added Successfully.
                                </Typography>
                                <Link to = "/employee" className = {classes.buttons}
                                    style ={{textDecoration: 'none'}}
                                >
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >Home </Button>
                                </Link>

                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === steps.length - 1 ? submitForm : handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Add Employee' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </Container>
    );
}