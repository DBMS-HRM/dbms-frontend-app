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
import { makeStyles } from '@material-ui/core/styles';
import { InputBase,spacing } from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {useState} from "react";
import {func} from "prop-types";
import api from "../../../api";
import {toast} from "react-toastify";
import {getToday} from "../../../helpers/functions";

const leaveType = [
    {
      value: 'Annual',
      label: 'Annual',
    },
    {
      value: 'Casual',
      label: 'Casual',
    },
    {
      value: 'Maternity',
      label: 'Maternity',
    },
    {
      value: 'No-pay',
      label: 'No-pay',
    },
  ];

const useStyles = makeStyles((theme) =>({
  root: {
    background: 'linear-gradient(45deg, #4489A7 30%, #F3F5F6 90%)',
    border: '1px solid white',
    borderRadius: 3,    
    color: 'black',
    height: 48,
    padding: '0 30px',
  },

  textField: {
    border:'1px solid #064758',    
    background: '#0B7C9A',
    color:'#C7E8F1',
  },

  header:{
    color: '#045375',
    borderColor: 'white'
  },

  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "94vw",
    height: "210vh",
    backgroundColor:'#D4E6F9',
  },

  app:{
      background:'#DAEAEF',
      width:'44ch',
      borderBottom:'1px solid #045375',
      
  } ,

  txt:{
    border:'1px solid #064758',    
    background: '#0B7C9A',
    color:'#C7E8F1',
    height:'200%'
  } 

}));
let loading = false


const AddLeave = (props) => {

    const fullDate = new Date()
    const date = fullDate.getMonth()+1
    const today = `${fullDate.getFullYear()}-${date.toString().length === 1 ? "0"+date : date}-${fullDate.getDate()}`

    const classes = useStyles();
    const [ltype, setLeaveType] = useState('no-pay');
    const [check, setCheck] = useState(false)
    const [formData, setFormData] = useState({leaveType: '', fromDate: '', toDate: ''})

  const handleChange = (event) => {
    setLeaveType(event.target.value);
  };
    async function submitForm(formData) {
        loading = true
        const [res, data] = await api.leave.add.leave(formData)
        loading = false
        if(res.status !== 200) {
            toast.error(res.message)
            return
        }
        setFormData({...formData, leaveType: ''})
        toast.success("Successfully requested a leave !!!")
    }
  
  return (
    <Box className={classes.box}>
    <img src={logo} style={{ position: "absolute", top: "180vh", left: "50%" }} />
    
    <Grid >
        <Paper variant={"outlined"} 
            style={{padding :20,
            height:'185vh',
            width:'60vw',         
            margin:"2% auto"
                             
            }}>     
        <Container component="main" maxWidth="xs">
        <CssBaseline />
      
        
        <Grid align='center'>
            <Typography component="h1" variant="h5" className={classes.header}>
                Leave Request Application
            </Typography>
        </Grid>
        
       
        <Box mt={8} mx={-20} >
            <Box height={50} >
            
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
            <Typography className={classes.header} style={{fontSize:'120%'}}>
            Type of Absence Requested
            </Typography>
        </Box>
        <Box mx={-20} mt={1}>
            <TextField          
            select
            required
            label="Select"
            value={formData.leaveType}
            onChange={e=>setFormData({...formData, leaveType: e.target.value})}
            className={classes.app}
            >
            {leaveType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </Box>

        <Box mt={5} mx={-20}>
            <Typography className={classes.header} style={{fontSize:'120%'}}>
            Dates of Absence
            </Typography>
        </Box>

        <Box mx={-20} mt={1}>
        
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
                <Typography>From Date</Typography>
                <TextField
                    required           
                    type="date"
                    className={classes.app}
                    value={formData.fromDate}
                    onChange={e=>setFormData({...formData, fromDate: e.target.value})}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>To Date</Typography>
                <TextField
                    required
                    type="date"
                    className={classes.app}
                    value={formData.toDate}
                    onChange={e=>setFormData({...formData, toDate: e.target.value})}
                />
            </Grid>
        </Grid>
        </Box>

        <Box height={50} mt={8} mx={-20}>
           <Card className={classes.textField}>
                <CardContent>
                <Typography >
                    CERTIFICATION : I hereby request leave/approved absence from duty as indicated
                    above and cartify that such leave/absence is requested for the purpose(s) indicated.
                    I understand that falsification on this form may be grounds for disciplinary action. 
                </Typography>
                </CardContent>
            </Card>
        </Box>

        <Box mt={8} mx={18}>
            <FormControlLabel
                control={<Checkbox value={check} onChange={() => setCheck(!check)} color="primary" />}
                label="I agree"
                required
                className={classes.header}
            />
        </Box>

        <Box mx={-20} mt={3}>
            <TextField
                required         
                type="date"
                value={getToday()}
                className={classes.app}
            />
        </Box>

        {/*<Box mx={-20} mt={3}>            */}
        {/*    <InputBase*/}
        {/*        value="  SECTION II - TO BE COMPLETED BY THE COMPANY"*/}
        {/*        readOnly            */}
        {/*        type="Text"                                                                             */}
        {/*        fullWidth                    */}
        {/*        className={classes.textField}*/}
        {/*    />*/}
        {/*</Box>*/}

        {/*<Box mt={3} mx={-10} >*/}
        {/*    <FormControlLabel*/}
        {/*        control={<Checkbox value="approved" color="primary" />}*/}
        {/*        label="Approved"*/}
        {/*        disabled*/}
        {/*        className={classes.header}*/}
        {/*    />*/}
        {/*</Box>*/}

        {/*<Box  mx={-10} >*/}
        {/*    <FormControlLabel*/}
        {/*        control={<Checkbox value="rejected" color="primary" />}*/}
        {/*        label="Rejected"*/}
        {/*        disabled*/}
        {/*        className={classes.header}*/}
        {/*     />*/}
        {/*</Box>*/}

        {/*<Box mx={-20} mt={3}>*/}
        {/*    <TextField*/}
        {/*        disabled        */}
        {/*        type="date"                */}
        {/*        className={classes.app}*/}
        {/*    />*/}
        {/*</Box>*/}

        <Box mt={6}>
            <Button disabled={!check} type="submit" fullWidth variant="contained"  className={classes.root} onClick={() => submitForm(formData)}>
                Submit
            </Button>
        </Box>
          
    </Container>
</Paper>
</Grid>
</Box>
);
}
export default AddLeave;
