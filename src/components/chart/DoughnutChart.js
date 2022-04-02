import { Divider, Paper } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { dataDoughnut } from '../../utils/FakeData/dataDougnut'
import {Box} from '@material-ui/core'
import ComputerIcon from "@mui/icons-material/Computer"
import TabletIcon from "@mui/icons-material/Tablet"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useCommonStyle } from '../../utils/Style/commonStyle'

const DoughnutChart = () => {
  const classes = useCommonStyle()
  return (
    <>
    <Box >
      <h2 className={classes.titleChart} >Latest sales</h2>
      <Divider/>
    </Box>
         
    <Box padding={2}>
      <Doughnut data={dataDoughnut}  options={{responsive:true,maintainAspectRatio:true}}  />
    </Box>
     
        <Box className={classes.containerDougnutChart}>
          <Box className={classes.descriptionsDougnutChart}>
            <ComputerIcon/>
            <p>{dataDoughnut.labels[0]}</p>
            <h2 style={{color:'#FB8C00',fontSize:'2rem'}}>{dataDoughnut.datasets[0].data[0]}%</h2>
          </Box>
          <Box className={classes.descriptionsDougnutChart}>
            <TabletIcon/>
            <p>{dataDoughnut.labels[1]}</p>
            <h2 style={{color:'#E53935',fontSize:'2rem'}}>{dataDoughnut.datasets[0].data[1]}%</h2>
          </Box>
          <Box className={classes.descriptionsDougnutChart}>
            <PhoneAndroidIcon/>
            <p>{dataDoughnut.labels[2]}</p>
            <h2 style={{color:'#3F51B5',fontSize:'2rem'}}>{dataDoughnut.datasets[0].data[2]}%</h2>
          </Box>
        </Box>
   
  </>
  )
}

export default DoughnutChart