import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Button, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomInputField from "../../../components/CustomInput";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import ButtonLoading from "../../../components/ButtonLoading";
import { useFormik } from 'formik';
import * as yup from 'yup';
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

const branches = [
    {
        value: 'Sri Lanka',
        label: 'Sri Lanka',
    },
    {
        value: 'Bangladesh',
        label: 'Bangladesh',
    },
    {
        value: 'Pakistan',
        label: 'Pakistan',
    }
    ]

const validationSchema = yup.object({
    username: yup
        .string('Enter an username')
        .min(5, 'Too short!')
        .max(20, 'Too long!')
        .required('Username is required!'),
    password: yup
        .string('Enter a password')
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Password is required!'),
    emailAddress: yup
        .string()
        .email('Invalid email')
        .required('Required'),
})

export default function AddAdmin() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState('')

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            emailAddress: '',
            branchName: user.branchName || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    let formData = {
        username: username,
        password: password,
        email: email,
        branchName: branch
    }

    let loading = false
    async function submitForm() {
        loading = true
        const res = await dispatch(userTActions.addAdmin(formData))
        loading = false
        if(res.status === 200) {
            toast.success("Successfully added an admin !!!")
        }
        else {
            toast.error(res.message)
        }
    }


    return (
        <Container className={classes.container}>
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Add Admin
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required = {true}
                                    id="username"
                                    name="username"
                                    label="Username"
                                    fullWidth = {true}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required = {true}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    fullWidth = {true}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required = {true}
                                    error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                                    helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                                    id="emailAddress"
                                    name="emailAddress"
                                    label="Email Address"
                                    fullWidth = {true}
                                    value={formik.values.emailAddress}
                                    onChange={formik.handleChange}
                                />
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    required = {true}
                                    id="branchName"
                                    name="branchName"
                                    label="Branch"
                                    fullWidth = {true}
                                    value={formik.values.branchName}
                                    onChange={formik.handleChange}
                                >
                                    {branches.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={4}>
                                <Button color="primary" variant="contained" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </main>
        </Container>
    );
}