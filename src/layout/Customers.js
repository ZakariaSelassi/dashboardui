import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Grid, TablePagination, Typography } from '@material-ui/core'
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

const Customers = () => {
    
    const [customers, setCustomers] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [selected, setSelected] = useState([])
    const [selectedAll, setSelectedAll] = useState(false)
    const [single, setSingle] = useState(false)
    const classes = useCommonStyle()
    useEffect( async () => { 

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCustomers(data)
            setIsLoading(false)
        })

    }, [])

    const selectAllItems = (e) => {
        e.preventDefault()
        //console.log(e.target.checked)
        if(e.target.checked){
            const newSelects = customers.map(customer => customer.id)
            setSelected(newSelects)
            setSelectedAll(!selectedAll)
            console.log(selectedAll)
        }
        setSelected([])
    }

    if(!customers){
        return <div>Loading...</div>
    }
  return (
    
    <Grid container spacing={3} style={{paddingLeft:'1rem'}}>

        <Grid item xs={12}>
        <CustomerHead/>
        </Grid>
        {/* search bar come here  */}
        

        <Grid item xs={12}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{backgroundColor:'#F3F4F6'}}>
                <TableRow>
                    <TableCell onClick={selectAllItems}><Checkbox  checked={selectedAll} /></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Location</TableCell>
                    <TableCell >Phone</TableCell>
                    <TableCell >Registration Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {customers.map((customer ) => {
                    const isSelected = selected.indexOf(customer.id) !== -1;
                    return (
                        <TableRow key={customer.id}   hover className={classes.customerRow} onClick={(event,id) => {
                            setSelected(!isSelected ? [customer.id] : [])
                        }}>
                        <TableCell><Checkbox checked={isSelected || selectedAll}/></TableCell>
                        <TableCell component="th" scope="row">{customer.name}</TableCell>
                        <TableCell >{customer.email}</TableCell>
                        <TableCell >{customer.address.city}</TableCell>
                        <TableCell >{customer.phone}</TableCell>
                        <TableCell >{customer.company.name}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={customers.length}
                rowsPerPage={5}
                page={0}
                onChangePage={() => {}}
                onChangeRowsPerPage={() => {}}
            />
            </TableContainer>    
    </Grid>

    </Grid>

  )
}

export default Customers