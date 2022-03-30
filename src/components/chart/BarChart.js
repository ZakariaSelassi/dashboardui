import React from 'react'
import { dataBarChart } from "../../utils/dataBarChart";
import { Bar } from 'react-chartjs-2';
import { Box ,Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import  ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Divider from '@material-ui/core/Divider';
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
                height={400}
                  />
          
          </Box>
            
          <Divider/>
          <Box display="flex" justifyContent="flex-end" padding="1rem">
          <Button>
              OverView
          <ChevronRightIcon/>
          </Button>
          </Box>
    </>
       

  )
}

export default BarChart