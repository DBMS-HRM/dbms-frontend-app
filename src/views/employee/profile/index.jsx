import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase,spacing } from '@material-ui/core';
import logo from "../../../JupLogo.svg";
import logo1 from "../../../humanResourse.png";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";



const useStyles = makeStyles((theme) =>({
  
  textField: {
    border:'1px solid #8FC9D8',
    borderRadius: 10,
    background: 'linear-gradient(45deg, #A6CEE0 30%, #F3F5F6 90%)',
    color:'black',
  },
  
  box: {  
    
    width: "75vw",
    height: "160vh",
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
  const dispatch = useDispatch()
  const [data, setData] = useState({
    accountType: "",
    branchName: "",
    city: "",
    country: "",
    dateOfBirth: "",
    departmentName: "",
    district: "",
    emailAddress: "",
    employeeId: "",
    employmentStatus: "",
    firstName: "",
    jobTitle: "",
    lastName: "",
    maritalStatus: false,
    payGrade: "",
    phoneNumbers: [],
    status: false,
    street_1: "",
    street_2: "",
    supervisorId: "",
    username: "",
  })
  let loading = false

  useEffect(() => {
    async function getEmployeeDetails() {
      loading = true
      const [res,fetchedData] = await dispatch(userTActions.getEmployee())
      loading = false
      if(res.status !== 200) {
        toast.error(res.message)
        return
      }
      console.log(fetchedData)
      setData({...fetchedData.data})
    }
    getEmployeeDetails()
  },[])

  return (
    
    <Box className={classes.box}>
      <img src={logo1} style={{ position: "absolute", left: "75%", width:'25%',height:'162%',top:"9%"}} />
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
            
                value={"  Employee ID  :- "+data.employeeId}
                readOnly          
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
                value={"  First Name     :- "+data.firstName}
                readOnly           
                variant="outlined"
                required 
                fullWidth                 
                name="firstname"                  
                type="text"             
                className={classes.textField}
            
              />
            </Box>

            <Box height={40}>
               
              <InputBase
                value={"  Last Name     :- "+data.lastName}
                readOnly           
                variant="outlined"
                required 
                fullWidth                 
                name="lastname"                  
                type="text"             
                className={classes.textField}
            
              />
            </Box>

            <Box height={40}>
                
              <InputBase
                value={"  Date of Birth :- "+data.dateOfBirth}
                readOnly            
                
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
                value={"  Marital State :- "+data.maritalStatus}
                readOnly            
                
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
                 value={"  Branch Name :- "+data.branchName}
                 readOnly            
                
                 variant="outlined"
                 required 
                 fullWidth                                 
                 name="branch_name"                  
                 type="text"             
                 className={classes.textField}
                 
              />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value={"  Job Title :- "+data.jobTitle }
                  readOnly            
                  
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
                  value={"  Employment Status :- "+data.employmentStatus}
                  readOnly            
                 
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
                  value={"  Pay Grade :- "+data.payGrade}
                  readOnly            
                  
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
                  value={"  Department Name :- "+data.departmentName}
                  readOnly            
                  
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="department_name"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box className={classes.smallFont} height={40}>Emergency Details</Box>
            {/*{data.phoneNumbers.map(item => <Box height={40}>*/}

            {/*  <InputBase*/}
            {/*      value={"  Phone No. :- " + item}*/}
            {/*      readOnly*/}

            {/*      variant="outlined"*/}
            {/*      required*/}
            {/*      fullWidth*/}
            {/*      name="phone_no"*/}
            {/*      type="text"*/}
            {/*      className={classes.textField}*/}

            {/*  />*/}
            {/*</Box>)}*/}

              <Box height={40}>
                
                <InputBase            
                  value={"  Country :- "+data.country }
                  readOnly            
                  
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="country"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value={"  District :- "+data.district}
                  readOnly            
                  
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="district"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value={"  City :- "+data.city}
                  readOnly            
                  
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="city"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value={"  Street :- "+data.city}
                  readOnly            
                  
                  variant="outlined"
                  required 
                  fullWidth                                 
                  name="street"                  
                  type="text"             
                  className={classes.textField}
            
                />
              </Box>

              <Box height={40}>
                
                <InputBase            
                  value={"  Email :- "+data.emailAddress}
                  readOnly            
                 
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
