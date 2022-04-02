import React from 'react'
import {Box,Typography} from '@material-ui/core'
import ButtonMUI from '../dashboardL/common/ButtonMUI';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const CustomerHead = () => {
  return (
    <Box variant="Box" style={{width:'100%',margin:'0',paddingTop:'64px',paddingBottom:'64px'}}> 
    <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" style={{paddingLeft:'1rem'}}>
            Customers
        </Typography>
        <Box display="flex"  style={{margin:'0'}}>
        <ButtonMUI >
            <FileDownloadIcon style={{fontSize:'20px'}}/>
            Import</ButtonMUI>
        <ButtonMUI >
            <FileUploadIcon style={{fontSize:'20px'}}/>
            Export</ButtonMUI>
        <ButtonMUI color="secondary" variant="contained">Add Customers</ButtonMUI>
        </Box>
     
    </Box>  
</Box>
  )
}

export default CustomerHead