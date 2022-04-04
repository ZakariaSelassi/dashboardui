import React from 'react'
import { Box } from '@mui/system'
import InputCommon from '../components/Common/InputCommon'
import { Button } from '@mui/material'
import { Checkbox, Grid } from '@material-ui/core'
import { Check } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Register = () => {
  return (
    <Grid container style={{justifyContent:'center'}}>
      <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} >
      <Box style={{display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center' , margin:'2rem',height:'100%'}}>
        <Box >
          <Button>
            <ArrowBackIcon />
            Dashboard</Button>
          <h1 style={{margin:'0',textAlign:'left'}}>Create a new account</h1>
          <h6 style={{margin:'0',textAlign:'left'}}>Use your email to create a new account </h6>
          <Box style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'100%'}}>
          <InputCommon  id="firstName" label="firstName" variant="outlined" helperText="Enter your FirstName ."  />
          <InputCommon id="lastname" label="lastName" variant="outlined" helperText="Enter your LastName."/>
          <InputCommon id="Email address" label="Email Address" variant="outlined" helperText="Enter your email."/>
          <InputCommon  id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"/>
            <Box>
            <Checkbox/> <span>I have read the <a href="#"> Terms and Conditions</a></span>
            </Box>
      
             <Button variant="contained">
              Sign up Now
            </Button>
            <span>Have an account? <a href="#">Sign In</a></span>            
          </Box>
        </Box>
      </Box>
    </Grid>
    </Grid>

  )
}

export default Register