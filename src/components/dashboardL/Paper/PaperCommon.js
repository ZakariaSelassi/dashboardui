import React from 'react'
import { Paper,Box, Divider } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import { dataDoughnut } from '../../utils/FakeData/dataDougnut'
import { useCommonStyle } from '../../utils/Style/commonStyle'


const PaperCommon = ({title,budget,rating,icon,background,status,chart}) => {
    const classes = useCommonStyle()
  return (
    <Paper >
       {!status && <Box className={classes.mainPaper}>
            <Box>
                <span>{title}</span>
                <h2>{budget}</h2>
                <Box>
               {/*  <p>{rating}</p> */}
            </Box>
            </Box>
                <Box className={classes.iconPaper} sx={{backgroundColor:`
                ${background}`}}>
                {icon}
                </Box>
        </Box> }
    </Paper>
  )
}

export default PaperCommon