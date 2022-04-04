import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Container, Grid, TablePagination, Typography } from '@material-ui/core'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useCommonStyle} from "../utils/Style/commonStyle" 
import { Box } from '@mui/material';
import CustomerHead from '../components/customersL/CustomerHead';
import CustomerSearchBar from '../components/customersL/CustomerSearchBar';
import CustomerTable from '../components/customersL/CustomerTable';

const Customers = () => {
    

  return (
    
    <Grid container spacing={2}>
        <Grid item xs={8} sm={12} md={12} lg={12} xl={12}>
            <CustomerHead/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper style={{height:'100%'}}>
                <CustomerSearchBar/>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper style={{height:'100%'}}>
                <CustomerTable/>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default Customers