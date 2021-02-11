import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase,spacing } from '@material-ui/core';
import { borderColor, borderRadius } from '@material-ui/system';
import { AddToHomeScreen } from '@material-ui/icons';
import FaceIcon from '@material-ui/icons/Face';
import logo from "../JupLogo.svg";
import logo1 from "../humanResourse.png";


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
    border:'1px solid white',
    borderRadius: 10,
    background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
    color:'black',
    position:'absolute',
    left:'20%',
    top:'25%',
    width:'50%'
    
  },
  checkBox:{
    color: '#B0D3EC',
    borderColor: 'white'
  },
  box: {
    
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor:'#D4E6F9'
  },
  fontt:{
      fontFamily:'cursive',
      fontSize:'150%',
      top:'15%',
      position:'absolute',
      alignItems:'center',
      left:'35%'


  },
  
  
}));




const Profile = (props) => {
  const classes = useStyles();
  return (
    <Grid>
                 
        <img src={logo1} style={{ position: "absolute", left: "75%", width:'25%',height:'82.5%' }} />
        <Container>
        <Box className={classes.box}>
            <img src={logo} style={{ position: "fixed", top: "50%", left: "50%"}} />
            
                <label className={classes.fontt}>
                    Personal Information
                </label>
                
                <InputBase
            
                  value="  Employee ID :"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required                  
                  name="employee_id"                  
                  type="text"             
                  className={classes.textField}
            
                />
                <InputBase
            
                  value="  Employee ID :"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required                  
                  name="employee_id"                  
                  type="text"             
                  className={classes.textField}
      
                />
        </Box>
      </Container>  
        
    </Grid>
    
  );
}
export default Profile;
