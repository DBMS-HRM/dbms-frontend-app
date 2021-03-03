import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {InputBase, spacing} from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import {useState} from "react";
import {userTActions} from "../../../store/user";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import ButtonLoading from "../../../components/ButtonLoading";
import {toast} from "react-toastify";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #4489A7 30%, #F3F5F6 90%)',
        border: '1px solid white',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'black',
        height: 48,
        padding: '0 30px',
    },
    textField: {
        border: '1px solid white',
        borderRadius: 5,
        background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
        color: 'black'

    },
    checkBox: {
        color: '#B0D3EC',
        borderColor: 'white'
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: '#D4E6F9'
    }

}));


const SignIn = (props) => {
    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()


    /**
     * SignIn action
     */
    async function signIn() {
        setLoading(true)
        const response = await dispatch(userTActions.adminLogin(username, password))
        setLoading(false)
        if(response.status === 200 ) {
            setUsername("")
            setPassword("")
            history.push("/admin")
        }
        else {
            toast.error(response.message)
        }
    }


    return (
        <Box className={classes.box}>
            <img src={logo} style={{position: "fixed", top: "50%", left: "50%"}}/>
            <Grid>
                <Paper elevation={10}
                       style={{
                           padding: 20,
                           height: '75vh',
                           width: 400,
                           margin: "2% auto",
                           backgroundColor: '#045375'
                       }}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Grid align='center'>
                                <Avatar sx={{m: 1, bgcolor: 'secondary.main',}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5" className={classes.checkBox}>
                                    Admin Log in
                                </Typography>
                            </Grid>

                            <Box
                                component="form"
                                noValidate
                                sx={{
                                    width: '100%', // Fix IE11 issue.
                                    mt: 1,
                                }}
                                onSubmit={signIn}
                            >
                                <Box mt={8}>
                                    <Box height={50}>

                                        <InputBase

                                            placeholder="Username"
                                            type="Text"
                                            // margin="normal"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
                                            autoFocus
                                            className={classes.textField}
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}


                                        />
                                    </Box>
                                    <InputBase

                                        placeholder="Password"
                                        // margin="normal"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        className={classes.textField}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}

                                    />
                                </Box>
                                <Box mt={3}>
                                    <ButtonLoading variant="contained" sx={{mt: 3, mb: 2}}
                                                   className={classes.root} onClick={signIn} loading={loading}>
                                        Log In
                                    </ButtonLoading>
                                </Box>
                            </Box>

                        </Box>
                        <Box mt={2}>
                        </Box>
                    </Container>
                </Paper>
            </Grid>
        </Box>
    );
}
export default SignIn;
