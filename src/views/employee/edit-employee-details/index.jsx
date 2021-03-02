import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link }  from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalDetailForm from '../add-employee/personalDetailForm';
import CompanyDetailForm from '../add-employee/companyDetailForm';
import EmployeeAccountForm from '../add-employee/employeeAccountForm';
import ExtraForm from '../add-employee/extraForm';
import {Card, Container, Grid, TextField} from "@material-ui/core";
import user from "../../../api/modules/user";
import ButtonLoading from "../../../components/ButtonLoading";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {getDate} from "../../../helpers/functions";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({

    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: '100%',
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
        marginTop: "5rem",
        display: 'flex'
    },
}));

const steps = ['Personal', 'Company', 'Employee Account', 'Extra'];

let formData;
let loading;

export default function ViewEmployee() {
    const fullDate = new Date()
    const date = fullDate.getMonth()+1
    const today = `${fullDate.getFullYear()}-${date.toString().length === 1 ? "0"+date : date}-${fullDate.getDate()}`
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState('')
    const [showResetPasswordForm, setShow] = useState(false)
    const {employeeId} = useParams()

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [maritalStatus, setMaritalStatus] = useState(false)
    const [country, setCountry] = useState('Sri Lanka')
    const [customPhoneNumbers, setCustomPhoneNumbers] = useState([])
    const [phoneNumbers, setPhoneNumbers] = useState({})
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [street1, setStreet1] = useState('')
    const [street2, setStreet2] = useState('')
    const [branchName, setBranchName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [payGrade, setPayGrade] = useState('')
    const [employmentStatus, setEmploymentStatus] = useState('')
    const [departmentName, setDepartmentName] = useState('HR')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [accountType, setAccountType] = useState('')

    let loading = false
    useEffect(() => {
        async function getData() {
            loading = true
            const [res, data] = await dispatch(userTActions.getEmployee(employeeId))
            loading = false
            if(res.status !== 200) {
                toast.error(res.message)
            }
            if(data) {
                let fetchedData = data.data
                setFirstName(fetchedData.firstName)
                setLastName(fetchedData.lastName)
                setDateOfBirth(getDate(fetchedData.dateOfBirth))
                setMaritalStatus(fetchedData.maritalStatus)
                setCountry(fetchedData.country)
                setDistrict(fetchedData.district)
                setCity(fetchedData.city)
                if(fetchedData.street1) setStreet1(fetchedData.street1)
                if(fetchedData.street2) setStreet2(fetchedData.street2)
                setBranchName(fetchedData.branchName)
                setDepartmentName(fetchedData.departmentName)
                setJobTitle(fetchedData.jobTitle)
                setPayGrade(fetchedData.payGrade)
                setEmploymentStatus(fetchedData.employmentStatus)
                setUsername(fetchedData.username)
                setEmail(fetchedData.emailAddress)
                setAccountType(fetchedData.accountType)
                let phoneNumbersFetched = {}
                if (fetchedData.phoneNumbers) fetchedData.phoneNumbers.map((item,index) => {
                    phoneNumbersFetched[`phoneNumber${index+1}`] = item
                })
                setPhoneNumbers(phoneNumbersFetched)
            }
        }
        getData()
    }, [])

    const formData = {
        username: username,
        password: password,
        emailAddress: email,
        firstName: firstName,
        accountType: accountType,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        maritalStatus: maritalStatus,
        country: country,
        phoneNumber: customPhoneNumbers,
        district: district,
        city: city,
        street_1: street1,
        street_2: street2,
        branchName: branchName,
        jobTitle: jobTitle,
        payGrade: payGrade,
        employmentStatus: employmentStatus,
        departmentName: departmentName,
    }

    async function submitForm() {
        loading = true
        let res = await dispatch(userTActions.updateEmployee(employeeId))
        loading = false
        if(res.status === 200) {
            toast.success("Successfully updated the employee account!!!")
            return
        }
        toast.error(res.message)
    }

    async function resetPassword() {
        loading = true
        let res = await dispatch(userTActions.updatePassword(employeeId, {newPassword: newPassword}))
        loading = false
        if(res.status === 200) {
            toast.success("Successfully updated the employee account!!!")
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
                                           phoneNumbers={phoneNumbers} setPhoneNumbers={setPhoneNumbers}
                                           setCustomPhoneNumbers={setCustomPhoneNumbers}
                />;
            case 1:
                return <CompanyDetailForm branchName={branchName} setBranchName={setBranchName}
                                          jobTitle={jobTitle} setJobTitle={setJobTitle}
                                          payGrade={payGrade} setPayGrade={setPayGrade}
                                          employmentStatus={employmentStatus} setEmploymentStatus={setEmploymentStatus}
                                          departmentName={departmentName} setDepartmentName={setDepartmentName}
                                          type="view"

                />;
            case 2:
                return <EmployeeAccountForm username={username} setUsername={setUsername}
                                            password={password} setPassword={setPassword}
                                            email={email} setEmail={setEmail}
                                            accountType={accountType} setAccountType={setAccountType}
                                            type="view"
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
                <Grid container justify={"center"} spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Paper className={classes.paper}>
                            <Typography component="h1" variant="h4" align="center">
                                View Employee
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
                                                {activeStep === steps.length - 1 ? 'Update Employee Details' : 'Next'}
                                            </Button>
                                        </div>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{marginTop: '3rem'}}>
                        <Card style={{marginBottom: '3rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Button onClick={() => setShow(!showResetPasswordForm)} variant="outlined" color="primary" >Reset Password</Button>
                            {
                                showResetPasswordForm ?
                                    <Box>
                                        <Box>
                                            <TextField
                                                type='password'
                                                variant='outlined'
                                                label='New Password'
                                                style={{marginTop: '1rem'}}
                                                value={newPassword}
                                                onChange={e=>setNewPassword(e.target.value)}
                                            />
                                        </Box>
                                        <Box style={{marginTop: '1rem', display: 'flex', justifyContent: 'flex-end'}} >
                                            <Button variant="contained" color="primary" onClick={resetPassword} >Submit</Button>
                                        </Box>
                                    </Box> :
                                    null
                            }
                        </Card>
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}