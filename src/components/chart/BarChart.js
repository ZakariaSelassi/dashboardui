import React from 'react'
import { dataBarChart } from "../../utils/FakeData/dataBarChart";
import { Bar } from 'react-chartjs-2';
import { Box ,Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import  ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useCommonStyle } from '../../utils/Style/commonStyle';
import ButtonMUI from '../../components/common/ButtonMUI';

const BarChart = () => {
  const classes = useCommonStyle();
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
        <ButtonMUI>
           Overview
           <ArrowRightIcon style={{width:'20px',margin:'auto'}}/>
        </ButtonMUI>
    </>
       

  )
}

export default BarChart