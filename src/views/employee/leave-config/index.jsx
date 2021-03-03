import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Box, TextField, Grid, MenuItem, Button} from "@material-ui/core";
import api from "../../../api";
import {toast} from "react-toastify";
import {useDispatch, useSelector, useStore} from "react-redux";
import {actions,tActions, selectors} from "../../../store";
import leave from "../../../api/modules/leave";


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
    annual : "annual",
    casual : "casual",
    maternity : "maternity",
    noPay : "nopay",
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
    const [btnStatus, setBtnStatus] = useState(false);
    const [readOnly, setReadOnly] = useState(true);

    const leaveConfig = useSelector(selectors.meta.leaveConfig);

    const $setLeaves = (pay_grade) => {
        console.log(leaveConfig[payGrades.level1][leaveTypes.maternity]);
        setMaternity(leaveConfig[pay_grade][leaveTypes.maternity])
        setAnnual(leaveConfig[pay_grade][leaveTypes.annual])
        setCasual(leaveConfig[pay_grade][leaveTypes.casual])
        setNoPay(leaveConfig[pay_grade][leaveTypes.noPay])
    }

    useEffect(() => {
        console.log("Leave configs",leaveConfig);
        if(Object.keys(leaveConfig).length != 0){
            $setLeaves(payGrades.level1);
        }

    }, [])

    function changePayGrade(event) {
        const payGrade = event.target.value;
        switch (payGrade){
            case payGrades.level1:
                setPayGrade(payGrades.level1);
                $setLeaves(payGrades.level1);
                break;
            case payGrades.level2:
                setPayGrade(payGrades.level2);
                $setLeaves(payGrades.level2);
                break;
            case payGrades.level3:
                setPayGrade(payGrades.level3);
                $setLeaves(payGrades.level3);
                break;
            case payGrades.level4:
                setPayGrade(payGrades.level4);
                $setLeaves(payGrades.level4);
                break;
            default:
                setPayGrade(payGrade.level1);
                $setLeaves(payGrades.level1);
        }
    }

    function changeReadOnly(){
        console.log("Btn works");
        setReadOnly(false);
        setBtnStatus(true);
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
                            value={payGrade}
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
                            onChange={(event) => {}}
                                   disabled={readOnly}
                             // aria-readonly={"false"}
                            // InputProps={{
                            //     readOnly:false
                            // }}
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
                                readOnly:readOnly
                                
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
                                readOnly:readOnly
                                
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
                                readOnly:readOnly
                                
                            }}
                        />
                    </Grid>
                </Grid> 
                <Box mt={5}>
                <Button className={classes.root}
                    onClick={changeReadOnly}
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

