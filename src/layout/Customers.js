import React, { useEffect, useState } from 'react'
import { Checkbox, Grid, Typography } from '@material-ui/core'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Customers = () => {
    
    const [customers, setCustomers] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect( async () => { 

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCustomers(data)
            setIsLoading(false)
        })

    }, [])

    if(!customers){
        return <div>Loading...</div>
    }
  return (
    
    <Grid container spacing={3} style={{paddingLeft:'1rem'}}>
        <Typography variant="h4" style={{margin:'0',paddingTop:'64px',paddingBottom:'64px'}}>
            Customers
        </Typography>
        {/* search bar come here  */}
        
        <Grid item xs={12}>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><Checkbox/></TableCell>
                <TableCell>Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Location</TableCell>
                <TableCell >Phone</TableCell>
                <TableCell >Registration Date</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    customers.map(customer => (
                        <TableRow key={customer.id}>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell component="th" scope="row">{customer.name}</TableCell>
                            <TableCell align="right">{customer.email}</TableCell>
                            <TableCell align="right">{customer.address.city}</TableCell>
                            <TableCell align="right">{customer.phone}</TableCell>
                            <TableCell align="right">{customer.registered}</TableCell>
                        </TableRow>))
                }
            </TableBody>
            </Table>
            </TableContainer>
    </Grid>

    </Grid>

  )
}

export default Customers