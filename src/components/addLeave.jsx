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
import logo from "../JupLogo.svg";
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const leaveType = [
    {
      value: 'annual',
      label: 'Annual',
    },
    {
      value: 'casual',
      label: 'Casual',
    },
    {
      value: 'maternity',
      label: 'Maternity',
    },
    {
      value: 'no-pay',
      label: 'No-pay',
    },
  ];

const useStyles = makeStyles((theme) =>({
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
    border:'1px solid #064758',    
    background: '#0B7C9A',
    color:'#C7E8F1',
  },

  header:{
    color: '#064758',
    borderColor: 'white'
  },

  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "94vw",
    height: "230vh",
    backgroundColor:'#D4E6F9',
  },

  app:{
      background:'#DAEAEF',
      width:'55ch',
      border:'1px solid #064758',
      borderRadius:'5px'
  } ,

  txt:{
    border:'1px solid #064758',    
    background: '#0B7C9A',
    color:'#C7E8F1',
    height:'200%'
  } 

}));




const AddLeave = (props) => {
  const classes = useStyles();
  const [ltype, setLeaveType] = React.useState('no-pay');

  const handleChange = (event) => {
    setLeaveType(event.target.value);
  };
  
  return (
    <Box className={classes.box}>
    <img src={logo} style={{ position: "fixed", top: "50%", left: "50%" }} />
    
    <Grid >
        <Paper elevation={50} variant={"outlined"} 
            style={{padding :20,
            height:'200vh',
            width:'70vw',         
            margin:"2% auto",                 
            backgroundColor:'#89BFCE'}}>     
        <Container component="main" maxWidth="xs">
        <CssBaseline />
      
        
        <Grid align='center'>
            <Typography component="h1" variant="h5" className={classes.header}>
                Leave Request Application
            </Typography>
        </Grid>
        
       
        <Box mt={8} mx={-30} >
            <Box height={50} >
            
            <InputBase
                value="  SECTION I - TO BE COMPLETED BY THE EMPLOYEE"
                readOnly            
                type="Text"
                margin="normal"
                variant="outlined"                                             
                fullWidth                    
                className={classes.textField}
            />
            </Box>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                <TextField
                    required            
                    label="Employee Name" 
                    type="Text"             
                    placeholder="Employee Name"
                    variant="outlined"                    
                    className={classes.app}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required            
                    label="Employee ID" 
                    type="Text"              
                    placeholder="Employee ID"
                    variant="outlined"
                    className={classes.app}
                />
                </Grid>
            </Grid>

            <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                <TextField
                    required            
                    label="Department"  
                    type="Text"             
                    placeholder="Department"
                    variant="outlined"
                    className={classes.app}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required            
                    label="Phone No." 
                    type="Text"              
                    placeholder="Phone No."
                    variant="outlined"
                    className={classes.app}
                />
                </Grid>
            </Grid>
        </Box>

        <Box mt={5} mx={-30}>
            <Typography className={classes.header} style={{fontSize:'120%'}}>
            Type of Absence Requested
            </Typography>
        </Box>
        <Box mx={-30} mt={1}>
            <TextField          
            select
            required
            label="Select"
            variant="outlined"
            value={ltype}       
            onChange={handleChange}
            className={classes.app}
            >
            {leaveType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </Box>

        <Box mt={5} mx={-30}>
            <Typography className={classes.header} style={{fontSize:'120%'}}>
            Dates of Absense 
            </Typography>
        </Box>

        <Box mx={-30} mt={1}>
        
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
                <Typography className={classes.header} style={{fontSize:'90%'}}>
                    Absence From 
                </Typography>
                <TextField
                    required           
                    type="datetime-local"
                    variant="outlined"
                    className={classes.app}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography className={classes.header} style={{fontSize:'90%'}}>
                    Absence To
                </Typography>

                <TextField
                    required           
                    type="datetime-local"             
                    variant="outlined"
                    className={classes.app}
                />
            </Grid>
        </Grid>
        </Box>

        <Box height={50} mt={8} mx={-30}>
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
                control={<Checkbox value="agree" color="primary" />}
                label="I agree"
                required
                className={classes.header}
            />
        </Box>

        <Box mx={-30} mt={3}>
            <TextField
                required         
                type="date"                
                className={classes.app}
            />
        </Box>

        <Box mx={-30} mt={3}>            
            <InputBase
                value="  SECTION II - TO BE COMPLETED BY THE COMPANY"
                readOnly            
                type="Text"
                margin="normal"
                variant="outlined"                                             
                fullWidth                    
                className={classes.textField}
            />
        </Box>

        <Box mt={3} mx={-10} >
            <FormControlLabel
                control={<Checkbox value="approved" color="primary" />}
                label="Approved"
                disabled
                className={classes.header}
            />
        </Box>

        <Box  mx={-10} >
            <FormControlLabel
                control={<Checkbox value="rejected" color="primary" />}
                label="Rejected"
                disabled
                className={classes.header}
             />
        </Box>

        <Box mx={-30} mt={3}>
            <TextField
                disabled        
                type="date"                
                className={classes.app}
            />
        </Box>

        <Box mt={6}>
            <Button type="submit" fullWidth variant="contained"  className={classes.root}>
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
