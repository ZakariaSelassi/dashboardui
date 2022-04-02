import React from 'react'
import PaperCommon from '../components/Paper/PaperCommon';
import { Box, Paper } from '@material-ui/core'
import { PaperData } from "../utils/FakeData/dataPaper";
import { Grid } from '@material-ui/core';
/* chart js */
import DoughnutChart from '../components/dashboardL/chart/DoughnutChart';
import BarChart from '../components/dashboardL/chart/BarChart';
import Products from '../components/dashboardL/products/Products';
import Order from '../components/dashboardL/order/Order';
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
      
       <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
      <Paper  style={{height:'100%'}}>
        <Products/>
      </Paper>
      </Grid>
     <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
      <Paper  style={{height:'100%'}}>
        <Order/>
      </Paper>
      </Grid>



    </Grid>
  )
}

export default Dashboard