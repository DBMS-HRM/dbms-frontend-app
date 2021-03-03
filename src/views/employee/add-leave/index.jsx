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
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from "react";
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
    <Container className={classes.container}>
            <main className={classes.layout}>
                <Box mt={12}>           
                <Paper className={classes.paper}>                    
                    <Typography component="h1" variant="h4" align="center">
                        Leave Application Form
                    </Typography>
                    
                    <Box mt={5}>                  
                    <Typography  >
                    SECTION I - TO BE COMPLETED BY THE EMPLOYEE
                    </Typography>
                    </Box>
                    <Box mt={5}>  
                    <Typography  style={{fontSize:'120%'}}>
                        Type of Absence Requested
                     </Typography>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12}  > 
                      <TextField className={classes.root}         
                        variant="outlined"
                        fullWidth
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
                
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>From Date</Typography>
                          <TextField
                              required  
                              variant="outlined"         
                              type="date"
                              className={classes.root}
                              value={formData.fromDate}
                              onChange={e=>setFormData({...formData, fromDate: e.target.value})}
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography>To Date</Typography>
                          <TextField
                            required
                            variant="outlined"
                            type="date"
                            className={classes.root}
                            value={formData.toDate}
                            onChange={e=>setFormData({...formData, toDate: e.target.value})}
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

                <FormControlLabel
                  control={<Checkbox value={check} onChange={() => setCheck(!check)} color="primary" />}
                  label="I agree"
                  required                  
                />
                <Box mt={3}>
                  <TextField
                    required 
                    variant="outlined"        
                    type="date"
                    value={getToday()}
                    className={classes.root}
                  />
              </Box>

            <Box mt={6}>
            <Button disabled={!check} type="submit" fullWidth variant="contained"  onClick={() => submitForm(formData)}>
                Submit
            </Button>
            </Box>
          </Paper>
        </Box>
      </main>
                   
    </Container>
  );}    
export default AddLeave;
