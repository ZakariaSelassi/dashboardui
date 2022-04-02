import React from 'react'
import { dataBarChart } from "../../utils/dataBarChart";
import { Bar } from 'react-chartjs-2';
import { Box ,Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import  ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const useStyles = makeStyles((theme) => ({

  titleChart:{
    fontWeight:'600',
    fontSize:'1.125rem',
    lineHeight:'1.375',
    margin:0,
    padding:'1rem'
  }
}))

const BarChart = () => {
  const classes = useStyles();
  return (
    <>
        <h2 className={classes.titleChart}>Latest sales</h2>
        <Divider/>
        
          <Box padding={2}>
            <Bar data={dataBarChart} options={{
              maintainAspectRatio: false,
                      scales: {
                        y: {
                            beginAtZero: true,
                            min:0,
                            max:30,
                            ticks:{
                              stepSize:'5'
                            }
                        }
                    },
                  responsive:true,
                  
                }}
                height={450}
                  />
          
          </Box>
            
          <Divider/>
          <Box display="flex" justifyContent="flex-end"  alignItems="center" padding="1rem">
        <Button  style={{fontSize:'0.7rem'}}>
        Overview 
        <ArrowRightIcon style={{width:'20px',margin:'auto'}}/>
        </Button>
      
         </Box>
    </>
       

  )
}

export default BarChart