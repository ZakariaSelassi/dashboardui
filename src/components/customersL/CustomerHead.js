import React from 'react'
import {Box,Typography} from '@material-ui/core'
import ButtonMUI from '../dashboardL/common/ButtonMUI';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import { Input } from '@mui/icons-material';


const CustomerHead = () => {
  return (
    <Box style={{display:'flex', alignItems:'center',justifyContent:'space-between',flexWrap:'wrap' }}>
            <h4>Customers</h4>
            <Box  style={{display:'flex',flexWrap:'wrap'    }}>
                <Button>
                    <FileDownloadIcon style={{fontSize:'15px'}}/>
                    Import</Button>
                <Button  style={{ }}>
                    <FileUploadIcon style={{fontSize:'15px'}}/>
                    Export
                </Button>
                <Button color="secondary" variant="contained" /* style={{width:'50%'}} */ >Add Customers</Button>
            </Box>
    </Box>
  )
}

export default CustomerHead