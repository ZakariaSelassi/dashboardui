import React from 'react'
import { Paper,Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import { dataDoughnut } from '../../utils/dataDougnut'
const useStyles = makeStyles((theme) => ({
    rootPaper:{

    },
    mainPaper:{
        display:'flex',
        justifyContent:'space-between',
        padding:'1.5rem'
    },
    iconPaper:{
        color:'white',
      /*   backgroundColor:'#3f51b5', */
        width:'56px',
        height:'56px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
}))

const PaperCommon = ({title,budget,rating,icon,background,status,chart}) => {
    const classes = useStyles()
  return (
    <Paper  className={classes.rootPaper}>
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