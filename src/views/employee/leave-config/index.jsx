import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Box, TextField, Grid, MenuItem, Button} from "@material-ui/core";
import api from "../../../api";
import {toast} from "react-toastify";
import {useDispatch, useSelector, useStore} from "react-redux";
import {actions,tActions, selectors} from "../../../store";


const payGradeList = [
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

const payGrades = {
    level1 : "Level 1",
    level2 : "Level 2",
    level3 : "Level 3",
    level4 : "Level 4",
}

const leaveTypes = {
    annual : "annualLeaves",
    casual : "casualLeaves",
    maternity : "maternityLeaves",
    noPay : "nopayLeaves",
}

let loading = false

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
    root: {
        width: '33ch',
    },
   
     
}));
const LeaveConfig = (props) => {
    const classes = useStyles();
    const payGradeSelectWrapper = React.createRef()
    const [payGrade, setPayGrade] = useState("Level 1");
    const [casual, setCasual] = useState();
    const [annual, setAnnual] = useState();
    const [maternity, setMaternity] = useState();
    const [noPay, setNoPay] = useState();

    const dispatch = useDispatch();
    const leaveConfig = useSelector(selectors.meta.leaveConfig);

    useEffect(() => {
        async function getData() {
            loading = true;
            console.log(leaveConfig);
            const [res, fetchedData] = await api.leave.get.leaveConfigs();
            // Check status
            if(res.status !== 200) {
                toast.error(res.message)
            }
            setMaternity(leaveConfig[payGrades.level1[leaveTypes.maternity]])
            setAnnual(leaveConfig[payGrades.level1[leaveTypes.maternity]])
            setCasual(leaveConfig[payGrades.level1[leaveTypes.maternity]])
            setNoPay(leaveConfig[payGrades.level1[leaveTypes.maternity]])

            // if(fetchedData) {
            //     const customData = fetchedData.data
            //     customData.forEach((value, index)=> {
            //         if(value.payGrade === payGrades.level1){
            //             setPayGrade(payGrades.level1);
            //             setAnnual(value[leaveTypes.annual]);
            //             setCasual(value[leaveTypes.casual]);
            //             setMaternity(value[leaveTypes.maternity]);
            //             setNoPay(value[leaveTypes.noPay]);
            //         }
            //     });
            //     loading = false
            //     if(res.status !== 200) {
            //         toast.error(res.message)
            //     }
            // }
        }
        getData();
    }, [])

    function changePayGrade(event) {
        const payGrade = event.target.value;

    }

    return (
        <Container className={classes.container}>
            <main className={classes.layout}>
                <Box mt={12}>           
                <Paper className={classes.paper}>                    
                    <Typography component="h1" variant="h4" align="center">
                        Leave Config
                    </Typography>
                    <Box mt={3}>                  
                    <Grid container spacing={3}>
                    
                    <Grid item xs={12}  > 
                        <TextField
                            select
                            variant="outlined"
                            ref={payGradeSelectWrapper}
                            required = {true}
                            error = {false}
                            id="payGrade"
                            name="payGrade"
                            label="Pay Grade"
                            // value={paygrade}
                            onChange={(event) => changePayGrade(event)}
                            fullWidth = {true}
                            >
                            {payGradeList.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                
                    </Grid>
               
                    
                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="annual"
                            name="annual"
                            label="Annual"
                                   value={annual}
                            defaultValue="50"
                            InputProps={{
                                readOnly:true,
                                shrink : true
                            }}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="casual"
                            name="casual"
                            label="Casual"
                            value={casual}
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                                
                        }}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="maternity"
                            name="maternity"
                            label="Maternity"
                            value={maternity}
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                                
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="noPay"
                            name="noPay"
                            label="No-pay"
                            defaultValue="50"
                            value={noPay}
                            InputProps={{
                                readOnly:true
                                
                            }}
                        />
                    </Grid>
                </Grid> 
                <Box mt={5}>
                <Button className={classes.root}                  
                    variant="contained"                    
                    >Edit</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
        
    </main> 
</Container>
);
}

export default LeaveConfig;

