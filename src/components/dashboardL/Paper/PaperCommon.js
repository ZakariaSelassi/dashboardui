import React from 'react'
import { Paper,Box, Divider } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import { dataDoughnut } from"../../../utils/FakeData/dataDougnut"
import { useCommonStyle } from "../../../utils/Style/commonStyle";
import LinearProgress from '@mui/material/LinearProgress';

const PaperCommon = ({title,budget,rating,icon,background,status,chart,ratingIcon,durateRating}) => {
    const classes = useCommonStyle()
  return (
    <Paper style={{height:'100%'}}s>
       {!status && <Box className={classes.mainPaper}>
            <Box>
                <span>{title}</span>
                <h4 style={{ fontSize:'2rem',margin:'0' }}>{budget}</h4>
                <Box display="flex" fontSize="0.9rem"> 
                  {rating ? <p>{ratingIcon} </p> : null}
                  <p> 
                      {rating}
                     {rating ? <span>{durateRating}</span> : null } 
                     </p> 
                </Box>
                {
                  title === 'Task Progress' ? <Box width="100%">
                     <LinearProgress variant="determinate" value={50} />
                  </Box> : null
                }
            </Box>
              <Box className={classes.iconPaper} sx={{backgroundColor:`${background}`}}>
                {icon}
              </Box>   
        </Box> 
        
        }
      
    </Paper>
  )
}
PaperCommon.defaultProps = {
  durateRating : 'Since last month'
}
export default PaperCommon