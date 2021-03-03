import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, Container, spacing, TextField, Typography} from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import logo1 from "../../../humanResourse.png";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import {getDate} from "../../../helpers/functions";
import AddInputField from "../../../components/AddInputField";
import MenuItem from "@material-ui/core/MenuItem";
import api from "../../../api";


const useStyles = makeStyles((theme) => ({

    textField: {
        border: '1px solid #8FC9D8',
        borderRadius: 10,
        background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
        color: 'black',
    },

    box: {

        width: "75vw",
        height: "160vh",
        // backgroundColor:'#D4E6F9'

    },
    fontt: {
        fontSize: '150%',
        top: '15%',
    },
    smallFont: {
        fontSize: '120%',
        marginBottom: '2rem'
    }

}));

const Profile = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [passwords, setPassword] = useState({currentPassword: '', newPassword: ''})
    const [showResetPasswordForm, setShow] = useState(false)
    const [phoneNumbers, setPhoneNumbers] = useState({})
    const [customPhoneNumbers, setCustomPhoneNumbers] = useState([])
    const [isDisabled, setDisable] = useState(true)
    const [data, setData] = useState({
        accountType: "",
        branchName: "",
        city: "",
        country: "",
        dateOfBirth: "",
        departmentName: "",
        district: "",
        emailAddress: "",
        employeeId: "",
        employmentStatus: "",
        firstName: "",
        jobTitle: "",
        lastName: "",
        maritalStatus: false,
        payGrade: "",
        phoneNumbers: [],
        status: false,
        street_1: "",
        street_2: "",
        supervisorId: "",
        username: "",
    })
    let loading = false

    useEffect(() => {
        async function getEmployeeDetails() {
            loading = true
            const [res, fetchedData] = await api.user.get.myProfile()
            loading = false
            if (res.status !== 200) {
                toast.error(res.message)
                return
            }
            setData({...fetchedData.data, dateOfBirth: getDate(fetchedData.data.dateOfBirth)})
            let phoneNos = {}
            if (fetchedData.data.phoneNumbers)
                fetchedData.data.phoneNumbers.map((item, index) => phoneNos[`phone-Number${index}`] = item)
            setPhoneNumbers(phoneNos)
        }

        getEmployeeDetails()
    }, [])

    async function submitForm() {
        loading = true
        setData({...data, phoneNumbers: customPhoneNumbers})
        // setData({...data, dateOfBirth: getDate(data.dateOfBirth)})
        console.log(data)
        const res = dispatch(userTActions.updateMyProfile(data))
        loading = false
        console.log(data)
        if (res.status === 200) {
            toast.success("Successfully updated the profile!!!")
            return
        }
        toast.error(res.message)
    }

    async function resetPassword() {
        loading = true
        let res = await dispatch(userTActions.updateMyPassword(passwords))
        loading = false
        console.log(passwords)
        if (res.status === 200) {
            toast.success("Successfully changed the password!!!")
            return
        }
        toast.error(res.message)
    }

    return (

        <Container>
            {/*<img src={logo1} style={{ position: "absolute", left: "75%", width:'25%',height:'162%',top:"9%"}} />*/}
            <img src={logo} style={{position: "fixed", top: "50%", left: "50%"}}/>

            <Box style={{marginTop: '8rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center'}}>
                <Typography variant='h5'>
                    Personal Information
                </Typography>
            </Box>
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box className={classes.smallFont}>Personal Details</Box>
                    <Box style={{width: '100%'}}>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="First Name"
                            value={data.firstName}
                            onChange={e => setData({...data, firstName: e.target.value})}
                            readOnly
                            variant="outlined"
                            required
                            fullWidth
                            name="firstname"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Last Name"
                            value={data.lastName}
                            onChange={e => setData({...data, lastName: e.target.value})}
                            readOnly
                            variant="outlined"
                            required
                            fullWidth
                            name="lastname"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Date of Birth"
                            value={getDate(data.dateOfBirth)}
                            onChange={e => setData({...data, dateOfBirth: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="date_of_birth"
                            type="date"

                        />
                    </Box>

                    <Box height={80}>
                        <TextField
                            select
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Marital State"
                            value={data.maritalStatus ? "Married" : "Single"}
                            onChange={e => setData({...data, maritalStatus: e.target.value === "Married"})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="marital_state"
                            type="text"

                        >
                            <MenuItem key="Married" value="Married">
                                Married
                            </MenuItem>
                            <MenuItem key="Single" value="Single">
                                Single
                            </MenuItem>
                        </TextField>
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Email"
                            value={data.emailAddress}
                            onChange={e => setData({...data, emailAddress: e.target.value})}
                            readOnly
                            variant="outlined"
                            required
                            fullWidth
                            name="email"
                            type="text"
                        />
                    </Box>

                    <Box>
                        <Typography>Phone Numbers</Typography>
                        <AddInputField variant="outlined" disabled={isDisabled} name="phoneNumber" value={phoneNumbers}
                                       setValues={setPhoneNumbers} setCustomValues={setCustomPhoneNumbers}/>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box className={classes.smallFont}>Emergency Details</Box>
                    {/*{data.phoneNumbers.map(item => <Box>*/}

                    {/*  <TextField
          disabled
            style={marginBottom: '2rem*/}{/*      value={"  Phone No. :- " + item}*/}
                    {/*      readOnly*/}

                    {/*      variant="outlined"*/}
                    {/*      required*/}
                    {/*      fullWidth*/}
                    {/*      name="phone_no"*/}
                    {/*      type="text"*/}
                    {/*      */}

                    {/*  />*/}
                    {/*</Box>)}*/}

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Country"
                            value={data.country}
                            onChange={e => setData({...data, country: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="country"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="District"
                            value={data.district}
                            onChange={e => setData({...data, district: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="district"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="City"
                            value={data.city}
                            onChange={e => setData({...data, city: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="city"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Street 1"
                            value={data.street_1 || ''}
                            onChange={e => setData({...data, street_1: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="street"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled={isDisabled}
                            style={{marginBottom: '1rem'}}
                            label="Street 2"
                            value={data.street_2 || ''}
                            onChange={e => setData({...data, street_2: e.target.value})}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="street"
                            type="text"


                        />
                    </Box>
                    {data.payGrade !== "Level 1"
                        ?
                        <Button variant='contained' style={{textTransform: 'none'}} onClick={async () => {
                            setDisable(false);
                            if (!isDisabled) await submitForm()
                        }}>
                            {isDisabled ? 'Edit Personal & Emergency Details' : 'Submit'}
                        </Button>
                        :
                        null
                    }
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box className={classes.smallFont}>Company Details</Box>
                    <Box>

                        <TextField
                            disabled
                            style={{marginBottom: '1rem'}}
                            label="Branch Name"
                            value={data.branchName}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="branch_name"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled
                            style={{marginBottom: '1rem'}}
                            label="Job Title"
                            value={data.jobTitle}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="job_title"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled
                            style={{marginBottom: '1rem'}}
                            label="Employee Status"
                            value={data.employmentStatus}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="employment_status"
                            type="text"


                        />
                    </Box>

                    <Box>

                        <TextField
                            disabled
                            style={{marginBottom: '1rem'}}
                            label="Pay Grade"
                            value={data.payGrade}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="pay_grade"
                            type="text"


                        />
                    </Box>

                    <Box height={80}>

                        <TextField
                            disabled
                            style={{marginBottom: '1rem'}}
                            label="Department Name"
                            value={data.departmentName}
                            readOnly

                            variant="outlined"
                            required
                            fullWidth
                            name="department_name"
                            type="text"


                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{marginTop: '3rem'}}>
                    <Card style={{
                        marginBottom: '3rem',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Button onClick={() => setShow(!showResetPasswordForm)} variant="outlined" color="primary">Change
                            your Password</Button>
                        {
                            showResetPasswordForm ?
                                <Box>
                                    <Box style={{marginBottom: '1rem'}}>
                                        <TextField
                                            type='password'
                                            variant='outlined'
                                            label='Current Password'
                                            style={{marginTop: '1rem'}}
                                            value={passwords.currentPassword}
                                            onChange={e => setPassword({
                                                ...passwords,
                                                currentPassword: e.target.value
                                            })}
                                        />
                                    </Box>
                                    <Box style={{marginBottom: '1rem'}}>
                                        <TextField
                                            type='password'
                                            variant='outlined'
                                            label='New Password'
                                            style={{marginTop: '1rem'}}
                                            value={passwords.newPassword}
                                            onChange={e => setPassword({
                                                ...passwords,
                                                newPassword: e.target.value
                                            })}
                                        />
                                    </Box>
                                    <Box style={{marginTop: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
                                        <Button variant="contained" color="primary"
                                                onClick={resetPassword}>Submit</Button>
                                    </Box>
                                </Box> :
                                null
                        }
                    </Card>
                </Grid>
            </Grid>

        </Container>
    );
}
export default Profile;
