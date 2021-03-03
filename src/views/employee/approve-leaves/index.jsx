import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {createRef, useEffect, useRef, useState} from "react";
import api from "../../../api";
import {toast} from "react-toastify";
import {useHistory, useLocation, useParams} from "react-router";
import {getDate, getToday} from "../../../helpers/functions";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
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
    root: {
      width: '46ch',
    },
    borderss:{
      padding: theme.spacing(1),
      border:'1px solid',
      borderRadius:'5px'
    },
    

}));
let loading = false


const ApproveLeave = (props) => {

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
        <Container className={classes.container}>
            <main className={classes.layout}>
                <Box mt={12}>           
                <Paper className={classes.paper}>                    
                    <Typography component="h1" variant="h4" align="center">
                        Leave Application Form
                    </Typography>
                    
                    <Box mt={5}>                  
                        <Typography  className={classes.borderss}>
                            SECTION I - To be completed by the employee
                        </Typography>
                    </Box>
                    <Box mt={5}>  
                        <Typography  style={{fontSize:'120%'}}>
                            Type of Absence Requested
                        </Typography>
                    </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12}  > 
                        <TextField
                            label="Select"
                            variant="outlined"
                            value={data.leaveType}
                            disabled
                            className={classes.root}
                        />
                
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>From Date</Typography>
                            <TextField
                                required
                                variant="outlined"
                                type="date"                                        
                                className={classes.root}
                                value={data.fromDate}
                                disabled
                            />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography>To Date</Typography>
                            <TextField
                                required
                                variant="outlined"
                                type="date"
                                className={classes.root}
                                value={data.toDate}
                                disabled
                            />
                    </Grid>
                    </Grid>

                    <Box mt={3}>
                        <Typography className={classes.borderss}>
                        CERTIFICATION : I hereby request leave/approved absence from duty as indicated
                        above and cartify that such leave/absence is requested for the purpose(s) indicated.
                        I understand that falsification on this form may be grounds for disciplinary action. 
                        </Typography> 
                    </Box>

               

            
                    <Box mt={5}>                  
                        <Typography  className={classes.borderss}>
                            SECTION I - To be completed by the supervisor
                        </Typography>
                    </Box>
                    <FormControlLabel
                        control={<Checkbox checked={approve} onChange={() => {
                        setApprove(true);
                        setReject(false)
                        }} color="primary"/>}
                        label="Approved"
                    />
                    <Box>
                    <FormControlLabel
                        control={<Checkbox checked={reject} onChange={() => {
                            setReject(true)
                            setApprove(false)
                            }} color="primary"/>}
                            label="Reject"
                    />
                    </Box>
                    <Typography>{`Remaining ${data.leaveType} Leaves`}</Typography>
                    <TextField
                        disabled
                        variant="outlined"
                        type="text"
                        className={classes.root}
                        value={remainingLeaves}
                    />
                    <Box mt={3}>
                        <TextField
                            disabled
                            type="date"
                            variant="outlined"
                            className={classes.root}
                            value={getToday()}
                        />
                    </Box>
                <Box mt={6}>
            <Button disabled={!approve && !reject}
                fullWidth
                variant="contained"                                    
                onClick={() => submitForm()}
                >
                Submit
             </Button>
            </Box>
          </Paper>
        </Box>
      </main>
                   
    </Container>
        
    );
}
export default ApproveLeave;
