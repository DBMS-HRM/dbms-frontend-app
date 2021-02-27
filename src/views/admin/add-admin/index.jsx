import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomInputField from "../../../components/CustomInput";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch} from "react-redux";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import ButtonLoading from "../../../components/ButtonLoading";
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

export default function AddAdmin() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState('')

    let formData = {
        username: username,
        password: password,
        email: email,
        branchName: branch
    }

    let loading = false
    async function submitForm() {
        loading = true
        const res = dispatch(userTActions.addAdmin(formData))
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <CustomInputField
                                required = {true}
                                error = {false}
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth = {true}
                                value={username}
                                handleChange={setUsername}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required = {true}
                                error = {false}
                                type="password"
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth = {true}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CustomInputField
                                required = {true}
                                error = {false}
                                id="emailAddress"
                                name="emailAddress"
                                label="Email Address"
                                fullWidth = {true}
                                value={email}
                                handleChange={setEmail}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                required = {true}
                                error = {false}
                                id="branchName"
                                name="branchName"
                                label="Branch"
                                fullWidth = {true}
                                value={branch}
                                onChange={e=>setBranch(e.target.value)}
                            >
                                {branches.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonLoading loading={loading} onClick={submitForm} />
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </Container>
    );
}