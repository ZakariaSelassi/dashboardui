import { Divider, Paper } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { dataDoughnut } from '../../utils/dataDougnut'
import { makeStyles } from '@material-ui/core'
import {Box} from '@material-ui/core'
import ComputerIcon from "@mui/icons-material/Computer"
const useStyles = makeStyles((theme) => ({

  titleChart:{
    fontWeight:'600',
    fontSize:'1.125rem',
    lineHeight:'1.375',
    margin:0,
    padding:'1rem'
  }

}))

const DoughnutChart = () => {
  const classes = useStyles()
  return (
    <>
    <Box >
      <h2 className={classes.titleChart} >Latest sales</h2>
      <Divider/>
    </Box>
         
    <Box padding={2}>
      <Doughnut data={dataDoughnut}  options={{responsive:true}}  />
    </Box>
     
        <Box sx={{display:'flex',justifyContent:'center',paddingTop: '16px'}}>
          <Box style={{textAlign:'center',padding: '8px'}}>
            <ComputerIcon/>
            <p>{dataDoughnut.labels[0]}</p>
            <h2>{dataDoughnut.datasets[0].data[2]}%</h2>
          </Box>
          <Box style={{textAlign:'center',padding: '8px'}}>
            <ComputerIcon/>
            <p>{dataDoughnut.labels[0]}</p>
            <h2>{dataDoughnut.datasets[0].data[2]}%</h2>
          </Box>
          <Box style={{textAlign:'center',padding: '8px'}}>
            <ComputerIcon/>
            <p>{dataDoughnut.labels[0]}</p>
            <h2>{dataDoughnut.datasets[0].data[2]}%</h2>
          </Box>
        </Box>
   
  </>
  )
}

export default DoughnutChart