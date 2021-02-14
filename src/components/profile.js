import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase,spacing } from '@material-ui/core';
import logo from "../JupLogo.svg";
import logo1 from "../humanResourse.png";



const useStyles = makeStyles((theme) =>({
  
  textField: {
    border:'1px solid #8FC9D8',
    borderRadius: 10,
    background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
    color:'black',
  },
  
  box: {  
    
    width: "100vw",
    height: "78vh",
    backgroundColor:'#D4E6F9'
    
  },
  fontt:{
      fontFamily:'cursive',
      fontSize:'150%',
      top:'15%',
      position:'absolute',
      alignItems:'center',
      left:'35%',     


  },
  
  
  
}));




const Profile = (props) => {
  const classes = useStyles();
  return (
    
                 
        
        
        <Box className={classes.box}>
        <img src={logo1} style={{ position: "absolute", left: "75%", width:'25%',height:'82.5%',top:"10%"}} />
            <img src={logo} style={{ position: "fixed", top: "50%", left: "50%"}} />
            <Grid container  
            style={{  
              width:650,                     
              margin:"5% 20%",
              
            }}>
              <Box padding={2}>
                
                <Box className={classes.fontt} >
                    Personal Information
                </Box>
               
         
              <Box height={50} style={{width:650}}>
                
                <InputBase
            
                  value="  Employee ID  :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="employee_id"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                <Box height={50}>
               
                <InputBase
            
                  value="  Name             :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                 
                  name="name"                  
                  type="text"             
                  className={classes.textField}
      
                />
                </Box>
                <Box height={50}>
                <InputBase
            
                  value="  Email             :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="email"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                <Box height={50}>
                
                <InputBase
            
                  value="  Date of Birth :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="date_of_birth"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                <Box height={50}>
                
                <InputBase
            
                  value="  Marital State :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="marital_state"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                <Box height={50}>
                <InputBase
            
                  value="  Age                :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="age"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                <Box >
                <InputBase
            
                  value="  Address         :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="address"                  
                  type="text"             
                  className={classes.textField}
            
                />
                </Box>
                </Box>
                
                
            </Grid>    
        </Box>
        
        
    
    
  );
}
export default Profile;
