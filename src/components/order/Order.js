import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import {order} from '../../utils/dataOrder';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Order = () => {
    const [orderData, setOrderData] = useState(Object.keys(order[0]));
  return (
      <>
        <TableContainer>
        <h1 style={{    fontWeight:'600',
    fontSize:'1.125rem',
    lineHeight:'1.375',
    margin:0,
    padding:'1rem'}}>Latest Products</h1>
                <Divider/>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow style={{background:'#F3F4F6'}}>                
                {
                        orderData.map((label, index) => {
                            return (
                                <TableCell   key={index} style={{color:'back',fontWeight:'bold'}}>
                                    <TableSortLabel
                                     direction='desc' 
                                    >
                                    {label.toUpperCase()}
                                    </TableSortLabel>
                                 </TableCell>
                            )
                        })
                    }   
            </TableRow>
            </TableHead>
            <TableBody>
            {order.map((row) => (
                <TableRow
                hover
                key={row.ORDER_REF}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.ORDER_REF}
                </TableCell>
                <TableCell >{row.CUSTOMERS}</TableCell>
                <TableCell >{row.date}</TableCell>
                {/* change background color depending on status  */}
                <TableCell ><span style={{fontSize:'0.9rem',borderRadius:'12px',color:'white',padding:'0.4rem',backgroundColor: row.status == 'Pending' ?   "#FFB020" : row.status == "Delivered" ? '#14B8A6' : '#D14343'}}>
                        {row.status}
                    </span></TableCell>       
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Divider/>
        <Box display="flex" justifyContent="flex-end"  alignItems="center" padding="1rem">
        <Button  style={{fontSize:'0.7rem'}}>
            View all 
        </Button>
        <ArrowRightIcon style={{width:'20px'}}/>
         </Box>
        </TableContainer>

    </>
                     
  );
}
export default Order;