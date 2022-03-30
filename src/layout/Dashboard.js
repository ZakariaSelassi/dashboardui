import React from 'react'
import PaperCommon from '../components/Paper/PaperCommon';
import { Box, Paper } from '@material-ui/core'
import { PaperData } from '../utils/dataPaper';
import { Grid } from '@material-ui/core';
/* chart js */
import DoughnutChart from '../components/chart/DoughnutChart';
import BarChart from '../components/chart/BarChart';
import Products from '../components/products/Products';
const Dashboard = () => {
  return (
    <Grid container spacing={2}>   
      {
        PaperData.map((paper,index)=>{
          return(
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <PaperCommon {...paper} key={index} status={false}/>
            </Grid>
          )
        })
      }
      <Grid item xs={12} sm={12} md={12} lg={9} xl={9}> 
      <Paper style={{height:'100%'}} >
          <BarChart/>
      </Paper>
       
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Paper style={{height:'100%'}}>
          <DoughnutChart/>
        </Paper>
      </Grid>
      
      <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
        <Products/>
      </Grid>


    </Grid>
  )
}

export default Dashboard