import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase,spacing } from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import logo1 from "../../../humanResourse.png";



const useStyles = makeStyles((theme) =>({
  
  textField: {
    border:'1px solid #8FC9D8',
    borderRadius: 10,
    background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
    color:'black',
  },
  
  box: {  
    
    width: "75vw",
    height: "125vh",
    backgroundColor:'#D4E6F9'
    
  },
  fontt:{
      fontFamily:'cursive',
      fontSize:'150%',
      top:'15%',        
  },
  smallFont:{
    fontFamily:'cursive',
    fontSize:'120%',
  }
  
}));
const Profile = (props) => {
  const classes = useStyles();
  return (
    
    <Box className={classes.box}>
      <img src={logo1} style={{ position: "absolute", left: "75%", width:'25%',height:'126%',top:"9%"}} />
      <img src={logo} style={{ position: "fixed", top: "50%", left: "50%"}} />
      <Grid container  
        style={{                                         
        width:650,                     
        margin:"0% 20%",
        }}>

          <Box padding={5} height={50}>
                
            <Box className={classes.fontt} height={60} style={{margin:"0% 25%"}}>
              Personal Information
            </Box>
               
            <Box className={classes.smallFont} height={40}>Personal Details</Box>
            <Box height={40} style={{width:650}}>
                
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
            <Box height={40}>
               
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

            <Box height={40}>
                
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
               
            <Box height={80}>
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

            <Box className={classes.smallFont} height={40}>Company Details</Box>
            <Box height={40}>
                
              <InputBase
                 value="  Branch ID :-"
                 readOnly            
                 margin="normal"
                 variant="outlined"
                 required 
                 fullWidth                                 
                 name="branch_id"                  
                 type="text"             
                 className={classes.textField}
                 
              />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value="  Job Title :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="job_title"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value="  Employment Status :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="employment_status"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value="  Pay Grade :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="pay_grade"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={80}>
                
                <InputBase            
                  value="  Department Name :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="department_name"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box className={classes.smallFont} height={40}>Emergency Details</Box>
              <Box height={40}>
                
                <InputBase            
                  value="  Phone No. :-"
                  readOnly            
                  margin="normal"
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="phone_no"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value="  Address :-"
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

              <Box height={40}>
                
                <InputBase            
                  value="  Email :-"
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
                
            </Box>
      </Grid>   
             
    </Box>
  );
}
export default Profile;
