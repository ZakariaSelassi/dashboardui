import React from 'react'
import Box from '@material-ui/core/Box';
import ReactIcon from "../icon/404.svg"
import { ArrowLeft } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <Grid container style={{justifyContent:'center'}}>
      <Grid  item xs={8} sm={12} md={12} lg={12} xl={12}>
      <Box sx={{ textAlign: 'center'}}>
          <h1>404: The page you are looking for isn’t here</h1>
          <h6>You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</h6>
        
          <img src={ReactIcon} alt="React Logo" style={{width:'300px'}}/>

        <Box>
            <Button  variant="contained" onClick={() => navigate('/dashboard')}>
                <ArrowBackIcon/>
                Go Back

            </Button>
        </Box>
  
  </Box>
      </Grid>
    </Grid>

  )
}

export default NotFound