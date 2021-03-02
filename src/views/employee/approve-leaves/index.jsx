import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {InputBase, spacing} from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import {createRef, useEffect, useRef, useState} from "react";
import api from "../../../api";
import {toast} from "react-toastify";
import {useHistory, useLocation, useParams} from "react-router";
import {getDate, getToday} from "../../../helpers/functions";

const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(45deg, #4489A7 30%, #F3F5F6 90%)',
        border: '1px solid white',
        borderRadius: 3,
        color: 'black',
        height: 48,
        padding: '0 30px',
    },

    textField: {
        border: '1px solid #064758',
        background: '#0B7C9A',
        color: '#C7E8F1',
    },

    header: {
        color: '#045375',
        borderColor: 'white'
    },

    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "94vw",
        height: "210vh",
        backgroundColor: '#D4E6F9',
    },

    app: {
        background: '#DAEAEF',
        width: '44ch',
        borderBottom: '1px solid #045375',

    },

    txt: {
        border: '1px solid #064758',
        background: '#0B7C9A',
        color: '#C7E8F1',
        height: '200%'
    }

}));
let loading = false


const ApproveLeave = () => {

    const fullDate = new Date()
    const date = fullDate.getMonth() + 1
    const today = `${fullDate.getFullYear()}-${date.toString().length === 1 ? "0" + date : date}-${fullDate.getDate()}`
    const {leaveId, employeeId} = useParams()

    const classes = useStyles();
    const history = useHistory()
    const [approve, setApprove] = useState(false);
    const [reject, setReject] = useState(false);
    const [data, setData] = useState({leaveType: '', fromDate: '', toDate: ''})
    const [remainingLeaves, setRemainingLeaves] = useState(0)

    useEffect(() => {
        async function getData() {
            loading = true
            const [res, fetchedData] = await api.leave.get.leave(leaveId)
            const [res2, fetchedData2] = await api.leave.get.remainingSubordinateLeaves(employeeId)
            if (fetchedData) {
                const customData = fetchedData.data[0]
                setData({
                    leaveType: customData.leaveType,
                    fromDate: getDate(customData.fromDate),
                    toDate: getDate(customData.toDate)
                })
                loading = false
                if (res.status !== 200) {
                    toast.error(res.message)
                }
                if (fetchedData2) {
                    console.log(fetchedData2)
                    setRemainingLeaves(fetchedData2.data[0][customData.leaveType.toLowerCase()])
                }
            }
        }

        getData()
    }, [])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    async function submitForm() {
        let status = approve ? "Approved" : "Rejected"
        loading = true
        const [res, fetchedData] = await api.leave.update.leave({leaveStatus: status}, leaveId)
        loading = false
        if (res.status !== 200) {
            toast.error(res.message)
            return
        }
        toast.success(`Leave ${status}!!!`)
        history.push('/employee/show-leaves')

    }

    return (
        <Box className={classes.box}>
            <img src={logo} style={{position: "absolute", top: "180vh", left: "50%"}}/>

            <Grid>
                <Paper variant={"outlined"}
                       style={{
                           padding: 20,
                           height: '185vh',
                           width: '60vw',
                           margin: "2% auto"

                       }}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>


                        <Grid align='center'>
                            <Typography component="h1" variant="h5" className={classes.header}>
                                Leave Request Application
                            </Typography>
                        </Grid>


                        <Box mt={8} mx={-20}>
                            <Box height={50}>

                                <InputBase
                                    value="  SECTION I - TO BE COMPLETED BY THE EMPLOYEE"
                                    readOnly
                                    type="Text"
                                    variant="outlined"
                                    fullWidth
                                    className={classes.textField}
                                />
                            </Box>
                        </Box>

                        <Box mt={5} mx={-20}>
                            <Typography className={classes.header} style={{fontSize: '120%'}}>
                                Type of Absence Requested
                            </Typography>
                        </Box>
                        <Box mx={-20} mt={1}>
                            <TextField
                                label="Select"
                                value={data.leaveType}
                                disabled
                                className={classes.app}
                            />
                        </Box>

                        <Box mt={5} mx={-20}>
                            <Typography className={classes.header} style={{fontSize: '120%'}}>
                                Dates of Absence
                            </Typography>
                        </Box>

                        <Box mx={-20} mt={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="date"
                                        label="From Date"
                                        className={classes.app}
                                        value={data.fromDate}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="date"
                                        label="To Date"
                                        className={classes.app}
                                        value={data.toDate}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        {/*<Box mx={-20} mt={3}>*/}
                        {/*    <TextField*/}
                        {/*        required*/}
                        {/*        type="date"*/}
                        {/*        className={classes.app}*/}
                        {/*    />*/}
                        {/*</Box>*/}

                        <Box mx={-20} mt={3}>
                            <InputBase
                                value="  SECTION II - TO BE COMPLETED BY THE COMPANY"
                                readOnly
                                type="Text"
                                fullWidth
                                className={classes.textField}
                            />
                        </Box>

                        <Box mt={3} mx={-10}>
                            <FormControlLabel
                                control={<Checkbox checked={approve} onChange={() => {
                                    setApprove(true);
                                    setReject(false)
                                }} color="primary"/>}
                                label="Approved"
                                className={classes.header}
                            />
                        </Box>

                        <Box mx={-10}>
                            <FormControlLabel
                                control={<Checkbox checked={reject} onChange={() => {
                                    setReject(true)
                                    setApprove(false)
                                }} color="primary"/>}
                                label="Reject"
                                className={classes.header}
                            />
                        </Box>

                        <Box mx={-20} mt={3}>
                            <Typography>{`Remaining ${data.leaveType} Leaves`}</Typography>
                            <TextField
                                disabled
                                type="text"
                                className={classes.app}
                                value={remainingLeaves}
                            />
                        </Box>

                        <Box mx={-20} mt={3}>
                            <TextField
                                disabled
                                type="date"
                                className={classes.app}
                                value={getToday()}
                            />
                        </Box>

                        <Box mt={6}>
                            <Button disabled={!approve && !reject}
                                    fullWidth
                                    variant="contained"
                                    className={classes.root}
                                    onClick={() => submitForm()}
                            >
                                Submit
                            </Button>
                        </Box>

                    </Container>
                </Paper>
            </Grid>
        </Box>
    );
}
export default ApproveLeave;
